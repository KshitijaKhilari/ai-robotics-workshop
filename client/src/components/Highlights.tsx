import {
    FaCertificate,
    FaChalkboardTeacher,
    FaHeart,
    FaRobot,
} from "react-icons/fa";

const highlights = [
    {
        icon: FaCertificate,
        title: "Certificate Included",
        color: "text-[#f0a000] bg-[#fff1ce]",
    },
    {
        icon: FaChalkboardTeacher,
        title: "Live Mentor Support",
        color: "text-[#3f7ee8] bg-[#e8f1ff]",
    },
    {
        icon: FaRobot,
        title: "Hands-on Projects",
        color: "text-[#7b4cff] bg-[#efe9ff]",
    },
    {
        icon: FaHeart,
        title: "Beginner Friendly",
        color: "text-[#ff5ba8] bg-[#ffe8f3]",
    },
];

const Highlights = () => {
    return (
        <section className="bg-[#f3fbff]/80 py-16">
            <div className="container mx-auto px-5 sm:px-6">
                <div className="mb-10 text-center">
                    <h2 className="pastel-title text-3xl font-black sm:text-4xl">
                        Key Highlights
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="soft-card flex items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1"
                            >
                                <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl ${item.color}`}>
                                    <Icon />
                                </span>
                                <h3 className="font-black leading-5 text-[#17225f]">
                                    {item.title}
                                </h3>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
