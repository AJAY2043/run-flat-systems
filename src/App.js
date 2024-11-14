import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Project/LandingPage';
import AboutUs from './Pages/AboutUs/AboutUs'
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
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/aboutus' element={<AboutUs/>}/>
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
          <Route path='/contactus' element={<ContactUs/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
