import {
    FaCertificate,
    FaChalkboardTeacher,
    FaCheckCircle,
    FaHeart,
    FaLaptopHouse,
    FaTools,
} from "react-icons/fa";

const trustItems = [
    {
        icon: FaChalkboardTeacher,
        title: "Live mentor support",
        color: "bg-[#e8f1ff] text-[#3f7ee8]",
    },
    {
        icon: FaLaptopHouse,
        title: "Safe online environment",
        color: "bg-[#edfbde] text-[#6fbd35]",
    },
    {
        icon: FaTools,
        title: "Hands-on projects",
        color: "bg-[#efe9ff] text-[#7b4cff]",
    },
    {
        icon: FaCertificate,
        title: "Certificate included",
        color: "bg-[#fff1ce] text-[#f0a000]",
    },
    {
        icon: FaHeart,
        title: "Beginner friendly",
        color: "bg-[#ffe8f3] text-[#ff5ba8]",
    },
];

const ParentTrust = () => {
    return (
        <section className="kid-section bg-gradient-to-br from-[#fff9fd] via-[#f7fdff] to-[#f7f0ff] py-20">
            <div className="star-field" />
            <div className="container relative z-10 mx-auto px-5 sm:px-6">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-white/85 text-[#ff5ba8] shadow-[0_14px_28px_rgba(62,76,138,0.12)]">
                        <FaCheckCircle size={28} />
                    </div>
                    <h2 className="pastel-title text-4xl font-black sm:text-5xl">
                        Why Parents Love KidLab
                    </h2>
                    <p className="mt-3 font-semibold leading-7 text-[#667096]">
                        Designed to feel safe, structured, and exciting for first-time young innovators.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {trustItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="soft-card rounded-[1.7rem] p-5 text-center transition hover:-translate-y-1"
                            >
                                <div className={`mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl text-2xl ${item.color}`}>
                                    <Icon />
                                </div>
                                <p className="font-black leading-6 text-[#17225f]">
                                    {item.title}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ParentTrust;
