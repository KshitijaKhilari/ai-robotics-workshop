import { FaArrowRight } from "react-icons/fa";
import navbarLogo from "../assets/logo/navbar_logo.png";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white/72 backdrop-blur-xl border-b border-white/70 shadow-[0_10px_30px_rgba(90,110,180,0.08)]">
            <div className="container mx-auto px-5 sm:px-6">
                <div className="flex h-20 items-center justify-between gap-5">
                    <a href="#home" className="flex items-center">
                        <img
                            src={navbarLogo}
                            alt="KidLab Academy"
                            className="h-12 w-auto sm:h-14"
                        />
                    </a>

                    <div className="hidden items-center gap-7 text-sm font-extrabold text-[#17225f] md:flex">
                        <a href="#details" className="transition hover:text-[#f64c99]">
                            Details
                        </a>
                        <a href="#learning" className="transition hover:text-[#f64c99]">
                            Learning
                        </a>
                        <a href="#timeline" className="transition hover:text-[#f64c99]">
                            Journey
                        </a>
                        <a href="#faq" className="transition hover:text-[#f64c99]">
                            FAQ
                        </a>
                        <a
                            href="#registration"
                            className="pink-button inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-white transition hover:-translate-y-0.5"
                        >
                            Register <FaArrowRight size={12} />
                        </a>
                    </div>

                    <a
                        href="#registration"
                        className="pink-button inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold text-white md:hidden"
                    >
                        Join <FaArrowRight size={12} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
