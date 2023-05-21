import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/Navbar";
const RootLayout = () => {
    return (
       <div className="bg-gray-900">
       <Navbar/>
       <main>
        <Outlet/>
       </main>
        <Footer/>
       </div>
    );
};

export default RootLayout;