import Main from './Main.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import DoctorLogin from './doctor/DoctorLogin'
import React from 'react';
import PatientRegister from './patient/PatientRegister';
import PatientLogin from './patient/PatientLogin.jsx';
import AdminLogin from './Admin/AdminLogin.jsx';


const App = () => {
    return (
        <>
        
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} exact />
                    <Route path="/about" element={<About />} />
                    <Route path="/DoctorLogin" element={<DoctorLogin />} />
                    <Route path ='/PatientRegister' element={<PatientRegister/>}/>
                    <Route path ='/PatientLogin' element={<PatientLogin/>}/>
                    <Route path ='/AdminLogin' element={<AdminLogin/>}/>
                </Routes>
            </Router>
        </>
    );
}
export default App;
