import certificateImage from "../assets/images/certificate.png";

const Certificate = () => {
    return (
        <section className="bg-slate-50 py-24">
            <div className="container mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Certificate of Completion
                    </h2>

                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                        Every participant will receive an industry-style
                        AI & Robotics Workshop Certificate after
                        successfully completing the program.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>
                        <h3 className="text-3xl font-bold text-slate-900 mb-6">
                            Earn a Professional Certificate
                        </h3>

                        <ul className="space-y-4 text-slate-600">
                            <li>
                                ✅ Official Certificate of Completion
                            </li>

                            <li>
                                ✅ Showcase your achievement in AI & Robotics
                            </li>

                            <li>
                                ✅ Signed by Workshop Mentors
                            </li>

                            <li>
                                ✅ Great addition to student portfolios
                            </li>

                            <li>
                                ✅ Digital certificate for easy sharing
                            </li>
                        </ul>
                    </div>

                    {/* Certificate Preview */}
                    <div className="flex justify-center">
                        <img
                            src={certificateImage}
                            alt="Workshop Certificate"
                            className="
                                rounded-2xl
                                shadow-2xl
                                border
                                border-slate-200
                                hover:scale-105
                                transition-all
                                duration-300
                            "
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Certificate;