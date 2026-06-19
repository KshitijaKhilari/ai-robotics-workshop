import { FaCheckCircle } from "react-icons/fa";
import certificateImage from "../assets/images/certificate.png";

const certificatePoints = [
    "Official Certificate of Completion",
    "Showcase your achievement",
    "Signed by Workshop Mentors",
    "Great addition to student portfolios",
    "Digital certificate for easy sharing",
];

const Certificate = () => {
    return (
        <section className="kid-section bg-gradient-to-br from-[#effbff] to-[#fff7fb] py-20">
            <div className="container relative z-10 mx-auto grid items-center gap-10 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                    <h2 className="pastel-title text-4xl font-black sm:text-5xl">
                        Certificate of Completion
                    </h2>
                    <p className="mt-4 max-w-xl font-semibold leading-7 text-[#667096]">
                        Every participant receives an industry-style certificate upon successful completion.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {certificatePoints.map((point) => (
                            <li key={point} className="flex items-center gap-3 font-bold text-[#26305d]">
                                <FaCheckCircle className="text-[#36b879]" />
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-center">
                    <img
                        src={certificateImage}
                        alt="AI Robotics workshop certificate"
                        className="w-full max-w-3xl rounded-[1.6rem] border-4 border-white shadow-[0_22px_45px_rgba(62,76,138,0.18)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Certificate;
