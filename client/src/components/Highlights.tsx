import {
    FaCertificate,
    FaChalkboardTeacher,
    FaRobot,
    FaRocket,
} from "react-icons/fa";

const highlights = [
    {
        icon: <FaCertificate size={28} />,
        title: "Certificate Included",
    },
    {
        icon: <FaChalkboardTeacher size={28} />,
        title: "Live Mentor Support",
    },
    {
        icon: <FaRobot size={28} />,
        title: "Hands-on Projects",
    },
    {
        icon: <FaRocket size={28} />,
        title: "Beginner Friendly",
    },
];

const Highlights = () => {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Key Highlights
                    </h2>

                    <p className="text-slate-500 mt-4">
                        Everything your child needs to start their AI & Robotics journey.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="
                                bg-slate-50
                                rounded-2xl
                                p-6
                                text-center
                                shadow-md
                                hover:-translate-y-2
                                transition-all
                                duration-300
                            "
                        >
                            <div className="text-purple-600 flex justify-center mb-4">
                                {item.icon}
                            </div>

                            <h3 className="font-semibold text-slate-800">
                                {item.title}
                            </h3>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Highlights;