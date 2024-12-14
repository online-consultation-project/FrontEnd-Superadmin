import { Route, Router, Routes } from "react-router-dom";
import UserComp from "./components/SuperAdmin/user management/UserManagement";
import DoctorComp, {
  DoctorInfo,
  DoctorSection,
  FormSection,
} from "./components/SuperAdmin/doctor management/DoctorManagement";
import MedicalComp, {
  AddProductSection,
  AllProductsSection,
  DashboardSection,
  OrdersSection,
} from "./components/SuperAdmin/pharmacy management/MedicalManagement";
import AppointmentComp from "./components/SuperAdmin/appointmentManagement/Appointment";
import DashboardComp from "./components/SuperAdmin/dashboardMain/Dashboard";
import DoctorSideCardDesign from "./components/SuperAdmin/doctor management/SideDoctorCard";
import DoctorCard from "./components/SuperAdmin/doctor management/Doctors";
import Overview from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorOverview";
import Experience from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorExperience";
import Reviews from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorReview";
import TimeTable from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorTimetable";
import Setting from "./components/SuperAdmin/doctor management/doctorInfosecion/DoctorSetting";
import Signin from "./components/SuperAdmin/dashboardMain/Signin";
import PrivateRoute from "./components/auth/private";
import AdminForm from "./components/SuperAdmin/doctor management/AdminForm";
import ProductAddForm from "./components/Form/ProductAddForm";
import ProductForm from "./components/Form/ProductAddForm";
import Navbarmain from "./components/mainportfolio/NavbarComponentDoctor";
import SettingComp from "./components/SuperAdmin/settingsSuper/setting";

const RouteComp = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route  element={<PrivateRoute />}>
        <Route path="/home" element={<DashboardComp />} />
      

        <Route path="/userdetails" element={<UserComp />} />
        <Route path="/appointments" element={<AppointmentComp />} />

        <Route path="/pharmacy" element={<MedicalComp />}>
          <Route index element={<DashboardSection />} />
          <Route path="/pharmacy/addproducts" element={<AddProductSection />} />
          <Route path="/pharmacy/updateproduct/:_id" element={<AddProductSection />} />
          <Route path="/pharmacy/products" element={<AllProductsSection />} />
          <Route path="/pharmacy/manageorders" element={<OrdersSection />} />
        </Route>

        <Route path="/analytics" element={<div>Analytics</div>} />
        <Route path="/notifications" element={<div>Notifications</div>} />
        <Route path="/settings" element={<SettingComp/>} />
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
      </Route>

    </Routes>
  );
};

export default RouteComp;
