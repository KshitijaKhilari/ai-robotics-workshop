const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12">
            <div className="container mx-auto px-6">

                <div className="text-center">

                    <h3 className="text-2xl font-bold text-white">
                        AI & Robotics Summer Workshop
                    </h3>

                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                        Empowering young innovators through Artificial Intelligence,
                        Robotics, and hands-on technology learning experiences.
                    </p>

                    <div className="mt-8 flex justify-center gap-8 text-sm">
                        <span>📧 info@airoboticsworkshop.com</span>
                        <span>📞 +91 98765 43210</span>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-800 text-slate-500 text-sm">
                        © 2026 AI & Robotics Summer Workshop. All Rights Reserved.
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;