import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { auth, db } from "./configuration";

/**
 * This is the function that is used to register a user to the application.
 * @param {object} payload - This is the payload object of the function.
 * @property {string} payload.email - This is the email of the user.
 * @property {string} payload.password - This is the password of the user.
 * @property {string} payload.name - This is the name of the  user.
 * @property {string} payload.phoneNumber - This is the phoneNumber of the user.
 * @property {string} payload.dateOfBirth - This is the dateOfBirth of the user.
 * @returns {DocumentReference<import('firebase/firestore').DocumentData}
 * Returns the document reference of the  newly added user document
 */
const registerDoctor = async ({ name, phone, email, address, password }) => {
  //1: Have to validate the registerDoctor data

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  updateProfile(user, {
    displayName: `${name.slice(0, 1).toUpperCase()}${name
      .slice(1)
      .toLowerCase()}-Doctor`,
  });

  await addDoc(collection(db, "Doctors"), {
    name: name.toLowerCase(),
    email: email.toLowerCase(),
    phone,
    uid: user.uid,
    address,
  });
};

const registerPatient = async ({
  firstname,
  lastname,
  gender,
  age,
  pincode,
  phone,
  email,
  password,
}) => {
  //1: Have to validate the registerDoctor data

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  updateProfile(user, {
    displayName: `${firstname.slice(0, 1).toUpperCase()}${firstname
      .slice(1)
      .toLowerCase()}-Patients`,
  });

  const patientRef = await addDoc(collection(db, "Patients"), {
    firstname: firstname.toLowerCase(),
    lastname: lastname.toLowerCase(),
    gender: gender.toLowerCase(),
    age: age.toLowerCase(),
    pinCode: pincode.toLowerCase(),
    email: email.toLowerCase(),
    phone,
    uid: user.uid,
  });
  return new Promise((resolve, reject) => {
    const patientUnsubscribe = onSnapshot(patientRef, (doc) => {
      console.log(doc.data());
      resolve(doc);
    });
    //Have to save unsubscribe
  });
};

/**
 * @param {payload} param
 * @property {string} param.email - This is the email of the user.
 * @property {string} param.password - This is the password of the user.
 * @returns {UserCredential} - Returns the user credential of the user
 */
const login = async ({ email, password, userType }) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    const uid = user.user.uid;
    console.log({ uid });
    if (userType === "patient") {
      const patientsCollectionRef = collection(db, "Patients");
      return new Promise((resolve, reject) => {
        const patientUnsubscribe = onSnapshot(
          query(patientsCollectionRef, where("uid", "==", uid)),
          (querySnapshot) => {
            if (querySnapshot.empty)
              reject("Internal Error, users not properly registered");
            resolve(querySnapshot.docs[0]);
          }
        );
        //Have to save unsubscribe
      });
    }
    if (userType === "doctor") {
      const doctorCollectionRef = collection(db, "Doctors");
      return new Promise((resolve, reject) => {
        const doctorUnsubscribe = onSnapshot(
          query(doctorCollectionRef, where("uid", "==", uid)),
          (querySnapshot) => {
            if (querySnapshot.empty)
              reject("Internal Error, users not properly registered");
            resolve(querySnapshot.docs[0]);
          }
        );
        //Have to save unsubscribe
      });
      //Have to save the userCredential
    }
    if (userType === "admin") {
      const adminCollectionRef = collection(db, "Admin");
      return new Promise((resolve, reject) => {
        const adminUnsubscribe = onSnapshot(
          query(adminCollectionRef, where("uid", "==", uid)),
          (querySnapshot) => {
            if (querySnapshot.empty)
              reject("Internal Error,Admin has not been registered");
            resolve(querySnapshot.docs[0]);
          }
        );
        //Have to save unsubscribe
      });
    }
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * This is the function used to log the user out of the application
 * @returns {Promise<void>} - Returns a promise that resolves to void
 */
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {}
};

export { registerPatient, registerDoctor, login, logout };
