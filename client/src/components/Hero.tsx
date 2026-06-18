import { workshopData } from "../data/workshopData";
import robotImage from "../assets/images/robot.png";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white">
            <div className="container mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side */}
                    <div>

                        <div className="mb-6">
                            <span className="inline-block bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                                {workshopData.badge}
                            </span>

                            <p className="text-purple-200 text-sm mt-3 font-medium">
                                {workshopData.announcement}
                            </p>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                            {workshopData.title}
                        </h1>

                        <p className="text-slate-300 text-lg mt-6 max-w-xl">
                            {workshopData.subtitle}
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">

                            <a
                                href="#registration"
                                className="
                                    inline-flex items-center justify-center gap-2
                                    bg-gradient-to-r from-purple-600 to-fuchsia-500
                                    hover:from-purple-700 hover:to-fuchsia-600
                                    hover:scale-105
                                    transition-all duration-300
                                    px-8 py-4
                                    rounded-xl
                                    font-semibold
                                    text-white
                                    shadow-lg shadow-purple-500/20
                                "
                            >
                                Enroll Now
                                <span>→</span>
                            </a>

                            <button
                                className="
                                    border border-slate-600
                                    px-8 py-4
                                    rounded-xl
                                    hover:bg-slate-800
                                    transition-all duration-300
                                "
                            >
                                Learn More
                            </button>

                        </div>

                        {/* Stats */}
                        <div className="mt-12 flex gap-10 text-center">

                            {workshopData.stats.map((stat) => (
                                <div key={stat.label}>
                                    <h3 className="text-2xl font-bold">
                                        {stat.value}
                                    </h3>
                                    <p className="text-slate-400">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center">
                        <img
                            src={robotImage}
                            alt="AI Robot"
                            className="max-w-xl w-full drop-shadow-[0_0_60px_rgba(168,85,247,0.6)]"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;