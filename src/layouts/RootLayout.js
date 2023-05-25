import { Outlet } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from "../components/navbar/Navbar"
const RootLayout = () => {
    return (
       <div>
       <Navbar/>
       <main className="min-h-[calc(100vh-4rem)]">
        <Outlet/>
       </main>
        <Footer/>
       </div>
    );
};

export default RootLayout;