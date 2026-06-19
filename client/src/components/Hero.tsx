import type { CSSProperties } from "react";
import { FaArrowRight, FaBrain, FaLaptop, FaMedal, FaSun } from "react-icons/fa";
import { workshopData } from "../data/workshopData";
import robotImage from "../assets/images/robot.png";

const statIcons = [FaSun, FaBrain, FaLaptop, FaMedal];

const Hero = () => {
    const heroStats = [
        { value: workshopData.duration, label: "Duration" },
        { value: workshopData.ageGroup, label: "Age Group" },
        { value: workshopData.mode, label: "Live Sessions" },
        { value: "Certificate", label: "Of Completion" },
    ];

    return (
        <section
            id="home"
            className="kid-section min-h-screen bg-gradient-to-br from-[#e7faff] via-[#fdf6ff] to-[#fff2f8] pt-28"
        >
            <div className="star-field" />
            <span
                className="cloud left-8 top-28 hidden sm:block"
                style={{ "--cloud-width": "10rem", "--cloud-opacity": "0.7" } as CSSProperties}
            />
            <span
                className="cloud right-12 top-36 hidden md:block"
                style={{ "--cloud-width": "8rem", "--cloud-opacity": "0.62" } as CSSProperties}
            />
            <div className="container relative z-10 mx-auto px-5 pb-10 sm:px-6 lg:pb-16">
                <div className="grid min-h-[calc(100vh-7rem)] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
                    <div className="max-w-2xl">
                        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#7bbcff]/40 bg-[#dff3ff]/80 px-5 py-3 text-sm font-extrabold text-[#263a9b] shadow-sm">
                            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ffd15c]/35 text-[#f6a000]">
                                <FaSun />
                            </span>
                            {workshopData.badge}
                        </div>

                        <h1 className="pastel-title text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                            AI & Robotics
                            <span className="block text-[#ff5ba8]">Summer Workshop</span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-[#32406f]">
                            {workshopData.subtitle}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#registration"
                                className="pink-button inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 font-extrabold text-white transition hover:-translate-y-1"
                            >
                                Enroll Now <FaArrowRight size={14} />
                            </a>

                            <a
                                href="#details"
                                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-[#8b65ff] bg-white/80 px-7 py-4 font-extrabold text-[#7b4cff] shadow-sm transition hover:-translate-y-1 hover:bg-white"
                            >
                                Learn More <FaArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="relative flex min-h-[27rem] items-center justify-center">
                        <span
                            className="cloud right-20 top-28"
                            style={{ "--cloud-width": "6.5rem", "--cloud-opacity": "0.52" } as CSSProperties}
                        />
                        <div className="absolute bottom-6 h-40 w-full rounded-[50%] bg-[#74d6cf]/45 blur-2xl" />
                        <div className="absolute left-4 top-8 rounded-[2rem] border-2 border-[#b990ff] bg-white/65 p-4 text-[#9b62ff] shadow-lg">
                            <FaBrain size={34} />
                        </div>
                        <div className="absolute right-4 top-14 rounded-[2rem] border-2 border-[#7edce5] bg-white/75 px-5 py-4 text-sm font-black text-[#263a9b] shadow-lg">
                            Let's build
                            <span className="block">the future</span>
                        </div>
                        <img
                            src={robotImage}
                            alt="AI learning robot"
                            className="relative z-10 w-full max-w-[25rem] drop-shadow-[0_30px_45px_rgba(38,58,155,0.2)] sm:max-w-[30rem]"
                        />
                    </div>
                </div>

                <div className="soft-card relative z-20 mx-auto -mt-2 grid max-w-5xl gap-4 rounded-[2rem] p-4 sm:grid-cols-2 lg:grid-cols-4">
                    {heroStats.map((stat, index) => {
                        const Icon = statIcons[index];

                        return (
                            <div key={stat.label} className="flex items-center gap-4 rounded-2xl px-4 py-3">
                                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#eef7ff] text-2xl text-[#5897ff]">
                                    <Icon />
                                </span>
                                <span>
                                    <strong className="block text-xl font-black text-[#17225f]">
                                        {stat.value}
                                    </strong>
                                    <span className="text-sm font-bold text-[#6b7395]">
                                        {stat.label}
                                    </span>
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
