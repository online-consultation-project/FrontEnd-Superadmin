import { Route, Router, Routes } from "react-router-dom";
import UserComp from "./components/SuperAdmin/UserManagement";
import DoctorComp, {
  DoctorInfo,
  DoctorSection,
  FormSection,
} from "./components/SuperAdmin/DoctorManagement";
import MedicalComp, {
  AddProductSection,
  AllProductsSection,
  DashboardSection,
  OrdersSection,
} from "./components/SuperAdmin/MedicalManagement";
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
import Signin from "./components/SuperAdmin/Signin";
import PrivateRoute from "./components/auth/private";
import AdminForm from "./components/SuperAdmin/doctor management/AdminForm";
import ProductAddForm from "./components/Form/ProductAddForm";
import ProductForm from "./components/Form/ProductAddForm";
import Navbarmain from "./components/mainportfolio/NavbarComponentDoctor";

const RouteComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<PrivateRoute />}>
        <Route index element={<DashboardComp />} />
      </Route>
      

        <Route path="/userdetails" element={<UserComp />} />
        <Route path="/appointments" element={<AppointmentComp />} />

        <Route path="/pharmacy" element={<MedicalComp />}>
          <Route index element={<DashboardSection />} />
          <Route path="/pharmacy/addproducts" element={<AddProductSection />} />
          <Route path="/pharmacy/products" element={<AllProductsSection />} />
          <Route path="/pharmacy/manageorders" element={<OrdersSection />} />
        </Route>

        <Route path="/analytics" element={<div>Analytics</div>} />
        <Route path="/notifications" element={<div>Notifications</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path="/sidecard" element={<DoctorSideCardDesign />} />
        <Route path="/doccard" element={<DoctorCard />} />

        <Route path="/doctors" element={<DoctorComp />}>
          <Route index element={<FormSection />} />
          <Route path="/doctors/update/:id" element={<FormSection/>}/>
          <Route path="/doctors/doctorslist" element={<DoctorSection />} />
          <Route path="/doctors/doctorsinfo" element={<DoctorInfo />}>
            <Route index element={<Overview />} />
            <Route path="experience" element={<Experience />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="timetable" element={<TimeTable />} />
            <Route path="settings" element={<Setting />} />
          </Route>
        </Route>
        {/* <Route path="/addproduct" element={<ProductForm/>}/> */}

        <Route path="/navbar" element={<Navbarmain />} />
    </Routes>
  );
};

export default RouteComp;
