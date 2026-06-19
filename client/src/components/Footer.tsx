import type { CSSProperties } from "react";
import { FaEnvelope, FaPhoneAlt, FaRobot, FaStar } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="kid-section bg-gradient-to-br from-[#e9fbff] via-[#fff7fc] to-[#f2edff] py-14 text-[#17225f]">
            <div className="star-field" />
            <span
                className="cloud left-10 top-8 hidden sm:block"
                style={{ "--cloud-width": "7rem", "--cloud-opacity": "0.62" } as CSSProperties}
            />
            <span
                className="cloud right-14 bottom-12 hidden md:block"
                style={{ "--cloud-width": "8rem", "--cloud-opacity": "0.58" } as CSSProperties}
            />

            <div className="container relative z-10 mx-auto px-5 text-center sm:px-6">
                <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-3xl bg-white/80 text-[#7b4cff] shadow-[0_14px_30px_rgba(62,76,138,0.12)]">
                    <FaRobot size={34} />
                </div>

                <div className="mb-3 flex justify-center gap-3 text-[#ffd15c]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>

                <h3 className="pastel-title text-2xl font-black">
                    AI & Robotics Summer Workshop
                </h3>
                <p className="mx-auto mt-4 max-w-2xl font-bold leading-7 text-[#5d668e]">
                    A joyful learning space where kids explore Artificial Intelligence,
                    Robotics, and hands-on technology projects with friendly mentors.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-black text-[#263a9b]">
                    <span className="soft-card inline-flex items-center gap-2 rounded-2xl px-4 py-3">
                        <FaEnvelope className="text-[#ff5ba8]" /> hello@kidlabacademy.com
                    </span>
                    <span className="soft-card inline-flex items-center gap-2 rounded-2xl px-4 py-3">
                        <FaPhoneAlt className="text-[#4e9bff]" /> +91 98765 43210
                    </span>
                </div>

                <div className="mt-8 text-sm font-bold text-[#7a82a2]">
                    Copyright 2026 AI & Robotics Summer Workshop. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
