// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import SidebarMain from "./components/ReusableComponents/SidebarComponent";

// const App = () => {
//   return (
//     <Routes>
//       <Route path="/sidebar" element={<SidebarMain />} />
//     </Routes>
//   );
// };

// export default App;

import { Route, Router, Routes } from "react-router-dom";
import UserComp from "./components/SuperAdmin/UserManagement";
import DoctorComp, {
  DoctorInfo,
  DoctorSection,
  FormSection,
} from "./components/SuperAdmin/DoctorManagement";
import MedicalComp, { AddProductSection, AllProductsSection, DashboardSection, OrdersSection } from "./components/SuperAdmin/MedicalManagement";
import AppointmentComp from "./components/SuperAdmin/Appointment";
import Sidebar from "./components/Sidebar/Sidebar";
import DashboardComp from "./components/SuperAdmin/Dashboard";
import DoctorSideCardDesign from "./components/SuperAdmin/doctor management/SideDoctorCard";
import DoctorCard from "./components/SuperAdmin/doctor management/Doctors";
import Overview from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorOverview";
import Experience from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorExperience";
import Reviews from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorReview";
import TimeTable from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorTimetable";
import Setting from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorSetting";

const RouteComp = () => {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full sm:h-screen sm:w-72 w-full">
        <Sidebar />
      </div>
      <div className="p-6 bg-gray-200 sm:ml-72 overflow-x-scroll flex-1 ml-0 max-sm:mt-16">
        
          <Routes>
            <Route path="/home" element={<DashboardComp />} />
            <Route path="/userdetails" element={<UserComp />} />
            <Route path="/appointments" element={<AppointmentComp />} />

            <Route path="/pharmacy" element={<MedicalComp />}>
              <Route index element={<DashboardSection/>}/>
              <Route path="/pharmacy/addproducts" element={<AddProductSection/>}/>
              <Route path="/pharmacy/products" element={<AllProductsSection/>}/>
              <Route path="/pharmacy/manageorders" element={<OrdersSection/>}/>
            </Route>

            <Route path="/analytics" element={<div>Analytics</div>} />
            <Route path="/notifications" element={<div>Notifications</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
            <Route path="/sidecard" element={<DoctorSideCardDesign />} />
            <Route path="/doccard" element={<DoctorCard />} />

            <Route path="/doctors" element={<DoctorComp />}>
              <Route index element={<FormSection />} />
              <Route path="/doctors/doctorslist" element={<DoctorSection />} />
              <Route path="/doctors/doctorsinfo" element={<DoctorInfo />}>
                <Route index element={<Overview />}/>
                <Route path="experience" element={<Experience/>}/>
                <Route path="reviews" element={<Reviews/>}/>
                <Route path="timetable" element={<TimeTable/>}/>
                <Route path="settings" element={<Setting/>}/>
              </Route>

            </Route>
          </Routes>
        
      </div>
    </div>
  );
};

export default RouteComp;
