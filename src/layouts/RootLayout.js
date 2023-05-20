import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/Navbar/Navbar";

const RootLayout = () => {
    return (
       <div className="flex flex-col min-h-screen">
        <nav className="relative"><Navbar/></nav>
       <main className="flex-grow mt-20">
        <Outlet/>
       </main>
        <Footer/>
       </div>
    );
};

export default RootLayout;