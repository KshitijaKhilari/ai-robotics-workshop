import {
    FaUsers,
    FaCalendarAlt,
    FaLaptop,
    FaRupeeSign,
    FaRocket,
} from "react-icons/fa";

import { workshopData } from "../data/workshopData";

const details = [
    {
        icon: <FaUsers size={28} />,
        title: "Age Group",
        value: workshopData.ageGroup,
        desc: "Perfect for beginners",
    },
    {
        icon: <FaCalendarAlt size={28} />,
        title: "Duration",
        value: workshopData.duration,
        desc: "Weekend live sessions",
    },
    {
        icon: <FaLaptop size={28} />,
        title: "Mode",
        value: workshopData.mode,
        desc: "Learn from anywhere",
    },
    {
        icon: <FaRupeeSign size={28} />,
        title: "Fee",
        value: workshopData.fee,
        desc: "Affordable learning",
    },
    {
        icon: <FaRocket size={28} />,
        title: "Start Date",
        value: workshopData.startDate,
        desc: "Limited seats available",
    },
];

const WorkshopDetails = () => {
    return (
        <section
            id="details"
            className="bg-slate-50 py-24"
        >
            <div className="container mx-auto px-6">

                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-slate-900">
                        Workshop Details
                    </h2>

                    <p className="text-slate-500 mt-4">
                        Everything you need to know before enrolling.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

                    {details.map((detail) => (
                        <div
                            key={detail.title}
                            className="
                bg-white
                rounded-2xl
                p-6
                shadow-md
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
                text-center
              "
                        >
                            <div className="flex justify-center text-purple-600 mb-4">
                                {detail.icon}
                            </div>

                            <h3 className="font-semibold text-slate-700">
                                {detail.title}
                            </h3>

                            <p className="mt-2 text-lg font-bold text-slate-900">
                                {detail.value}
                            </p>
                            <p className="text-sm text-slate-500 mt-2">
                                {detail.desc}
                            </p>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default WorkshopDetails;