import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (

        <footer className="inset-x-0 bottom-0 h-16 mt-auto bg-gray-900">
            <div className="w-full max-w-screen-xl p-4 mx-auto text-center md:flex md:items-center md:justify-between">
                <span className="text-sm font-semibold text-gray-100">No ©, Feel Free to Replicate.
                </span>
                <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-100 md:justify-normal sm:mt-0">
                    <li>
                        <NavLink target='blank' to="https://github.com/PsKalsi19" className="mr-4 hover:underline md:mr-6 "> Github </NavLink>
                    </li>
                    <li>
                        <NavLink target='blank' to="https://twitter.com/kalamaurcode" className="mr-4 hover:underline md:mr-6">Twitter</NavLink>
                    </li>
                    <li>
                        <NavLink target='blank' to="https://www.linkedin.com/in/prabhjot-kalsi-8390a6240/" className="mr-4 hover:underline md:mr-6">LinkedIn</NavLink>
                    </li>
                </ul>
            </div>
        </footer>

    );
};

export default Footer;