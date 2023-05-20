import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
    return (
       <div className="flex flex-col min-h-screen bg-gray-900">
        <nav className="relative"><Navbar/></nav>
       <main className="flex-grow">
        <Outlet/>
       </main>
        <Footer/>
       </div>
    );
};

export default RootLayout;