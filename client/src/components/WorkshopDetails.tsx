import {
    FaCalendarAlt,
    FaLaptop,
    FaRocket,
    FaRupeeSign,
    FaUsers,
} from "react-icons/fa";
import { workshopData } from "../data/workshopData";

const details = [
    {
        icon: FaUsers,
        title: "Age Group",
        value: workshopData.ageGroup,
        desc: "Perfect for beginners",
        color: "text-[#9b62ff] bg-[#efe8ff]",
    },
    {
        icon: FaCalendarAlt,
        title: "Duration",
        value: workshopData.duration,
        desc: "Weekend live sessions",
        color: "text-[#ff6aae] bg-[#ffe8f3]",
    },
    {
        icon: FaLaptop,
        title: "Mode",
        value: workshopData.mode,
        desc: "Learn from anywhere",
        color: "text-[#4e9bff] bg-[#e5f3ff]",
    },
    {
        icon: FaRupeeSign,
        title: "Fee",
        value: workshopData.fee,
        desc: "Affordable learning",
        color: "text-[#ff8bbf] bg-[#fff0f6]",
    },
    {
        icon: FaRocket,
        title: "Start Date",
        value: workshopData.startDate,
        desc: "Limited seats available",
        color: "text-[#f2a300] bg-[#fff2cf]",
    },
];

const WorkshopDetails = () => {
    return (
        <section id="details" className="kid-section bg-gradient-to-br from-[#fff8fe] to-[#f1fbff] py-20">
            <div className="container relative z-10 mx-auto px-5 sm:px-6">
                <div className="mb-12 text-center">
                    <h2 className="pastel-title text-4xl font-black sm:text-5xl">
                        Workshop Details
                    </h2>
                    <p className="mt-3 font-semibold text-[#667096]">
                        Everything you need to know before enrolling.
                    </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                    {details.map((detail) => {
                        const Icon = detail.icon;

                        return (
                            <article
                                key={detail.title}
                                className="soft-card rounded-[1.7rem] p-6 text-center transition hover:-translate-y-1"
                            >
                                <div className={`mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl text-2xl ${detail.color}`}>
                                    <Icon />
                                </div>
                                <h3 className="text-sm font-black text-[#667096]">
                                    {detail.title}
                                </h3>
                                <p className="mt-2 text-xl font-black text-[#17225f]">
                                    {detail.value}
                                </p>
                                <p className="mt-2 text-sm font-semibold text-[#737b99]">
                                    {detail.desc}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WorkshopDetails;
