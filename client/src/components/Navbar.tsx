const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="container mx-auto px-6">

                <div className="flex items-center justify-between h-16">

                    <h1 className="text-xl font-bold text-white">
                        AI & Robotics
                    </h1>

                    <div className="hidden md:flex items-center gap-8 text-slate-300">

                        <a
                            href="#details"
                            className="hover:text-purple-400 transition"
                        >
                            Details
                        </a>

                        <a
                            href="#learning"
                            className="hover:text-purple-400 transition"
                        >
                            Learning
                        </a>

                        <a
                            href="#timeline"
                            className="hover:text-purple-400 transition"
                        >
                            Journey
                        </a>

                        <a
                            href="#faq"
                            className="hover:text-purple-400 transition"
                        >
                            FAQ
                        </a>

                        <a
                            href="#registration"
                            className="text-purple-400 font-medium"
                        >
                            Register
                        </a>

                    </div>

                </div>

            </div>
        </nav>
    );
};

export default Navbar;