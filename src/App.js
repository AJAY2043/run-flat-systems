import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Project/LandingPage';
// import AboutUs from './Pages/AboutUs/AboutUs'
import MilitaryRunFlatSystems from './Pages/OurServices/MilitaryRunFlatSystems/MilitaryRunFlatSystems';
import RunFlatSytems from './Pages/OurServices/RunFlatSystems/RunFlatSytems';
import BeadlockSystem from './Pages/OurServices/BeadlockSystem/BeadlockSystem';
import HeavyDutyWheels from './Pages/OurServices/HeavyDutyWheels/HeavyDutyWheels';
import MilitaryWheels from './Pages/OurServices/MilitaryWheels/MilitaryWheels';
import ContactUs from './Pages/ContactUs/ContactUs';
import RunFlatSystemsSingle from './Singles/RunFlatSystemsSingle/RunFlatSystemsSingle';
import MilitaryWheelsSingle from './Singles/MilitaryWheelsSingle/MilitaryWheelsSingle';
import MilitaryRunFlatSystemsSingle from './Singles/MilitaryRunFlatSystemsSingle/MilitaryRunFlatSystemsSingle';
import HeavyDutyWheelsSingle from './Singles/HeavyDutyWheelsSingle/HeavyDutyWheelsSingle';
import BedlockSystemsSingle from './Singles/BedlockSystemsSingle/BedlockSystemsSingle';
import Strengths from './Pages/AboutUs/Strengths/Strengths';
import Material from './Pages/AboutUs/Material/Material';
import Markets from './Pages/AboutUs/Markets/Markets';
import News from './Pages/AboutUs/News/News';
import OurTeam from './Pages/AboutUs/OurTeam/OurTeam';
import Company from './Pages/AboutUs/Company/Company';
import Credentials from './Pages/Credentials/Credentials';
import Resources from './Pages/Resources/Resources';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/company' element={<Company/>}/>
          <Route path='/ourteam' element={<OurTeam/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/markets' element={<Markets/>}/>
          <Route path='/material' element={<Material/>}/>
          <Route path='/strengths' element={<Strengths/>}/>
          {/* <Route path='/aboutus' element={<AboutUs/>}/> */}
          <Route path='/runflatsystems' element={<RunFlatSytems/>}/>
             <Route path='/runflatsystems/:id' element={<RunFlatSystemsSingle/>}/>
          <Route path='/militaryrunflatsystem' element={<MilitaryRunFlatSystems/>}/>
              <Route path='/militaryrunflatsystem/:id' element={<MilitaryRunFlatSystemsSingle/>}/>
          <Route path='/beadlocksystem' element={<BeadlockSystem/>}/>
              <Route path='/beadlocksystem/:id' element={<BedlockSystemsSingle/>}/>
          <Route path='/heavydutywheels' element={<HeavyDutyWheels/>}/>
               <Route path='/heavydutywheels/:id' element={<HeavyDutyWheelsSingle/>}/>
          <Route path='/militarywheels' element={<MilitaryWheels/>}/>
             <Route path='/militarywheels/:id' element={<MilitaryWheelsSingle/>}/>
          <Route path='/credentials' element={<Credentials/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
