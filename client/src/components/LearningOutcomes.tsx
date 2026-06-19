import { FaCheck, FaCode, FaLightbulb } from "react-icons/fa";
import { workshopData } from "../data/workshopData";
import robotImage from "../assets/images/robot.png";

const colors = [
    "bg-[#ece8ff] text-[#8b65ff]",
    "bg-[#ffe9f3] text-[#ff5ba8]",
    "bg-[#dcfbfa] text-[#20aeb8]",
    "bg-[#edfbde] text-[#6fbd35]",
    "bg-[#fff0cf] text-[#f1a61d]",
    "bg-[#ffe3ef] text-[#e85195]",
];

const LearningOutcomes = () => {
    return (
        <section id="learning" className="kid-section bg-gradient-to-br from-[#eefdff] to-[#fff8fb] py-20">
            <div className="star-field" />
            <div className="container relative z-10 mx-auto px-5 sm:px-6">
                <div className="mb-12 text-center">
                    <h2 className="pastel-title text-4xl font-black sm:text-5xl">
                        What Will Kids Learn?
                    </h2>
                    <p className="mt-3 font-semibold text-[#667096]">
                        Hands-on skills through exciting AI and robotics projects.
                    </p>
                </div>

                <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className="relative mx-auto max-w-sm">
                        <div className="absolute -left-8 top-8 rounded-2xl bg-white p-4 text-[#8b65ff] shadow-lg">
                            <FaCode size={28} />
                        </div>
                        <div className="absolute -right-5 top-24 rounded-2xl bg-white p-4 text-[#ffbd3d] shadow-lg">
                            <FaLightbulb size={28} />
                        </div>
                        <img
                            src={robotImage}
                            alt="Friendly robot learning assistant"
                            className="relative w-full drop-shadow-[0_24px_34px_rgba(38,58,155,0.18)]"
                        />
                    </div>

                    <div className="space-y-4">
                        {workshopData.outcomes.map((outcome, index) => (
                            <div
                                key={outcome}
                                className="soft-card flex items-center gap-4 rounded-2xl px-5 py-4 transition hover:-translate-y-0.5"
                            >
                                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${colors[index]}`}>
                                    <FaCheck size={14} />
                                </span>
                                <p className="font-bold leading-6 text-[#26305d]">
                                    {outcome}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningOutcomes;
