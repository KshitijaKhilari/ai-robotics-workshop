import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { FaPaperPlane, FaRobot } from "react-icons/fa";

type FormData = {
    name: string;
    email: string;
    phone: string;
};

const RegistrationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        try {
            setIsSubmitting(true);
            setErrorMessage("");
            setSuccessMessage("");

            const response = await axios.post(
                "http://localhost:5000/api/enquiry",
                data
            );

            setSuccessMessage(response.data.message);

            reset();
        } catch (error: any) {
            console.error(error);

            if (
                error.response?.data?.message ===
                "You have already registered for this workshop."
            ) {
                setErrorMessage(
                    "🤖 Looks like you're already registered! Our team will contact you soon."
                );
            } else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage(
                    "Something went wrong. Please try again."
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="registration"
            className="kid-section bg-gradient-to-br from-[#fff6fb] via-white to-[#effbff] py-20"
        >
            <div className="star-field" />

            <div className="container relative z-10 mx-auto grid items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr]">

                {/* Form */}
                <div className="mx-auto w-full max-w-xl lg:order-2">

                    <div className="mb-8 text-center">
                        <h2 className="pastel-title text-4xl font-black sm:text-5xl">
                            Register Now!
                        </h2>

                        <p className="mt-3 font-semibold text-[#667096]">
                            Reserve your spot for an exciting learning adventure.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="soft-card space-y-5 rounded-[2rem] p-6 sm:p-8"
                    >

                        {/* Success Message */}
                        {successMessage && (
                            <div className="rounded-2xl border border-[#a9ead0] bg-[#effff7] p-4 text-center">
                                <h4 className="text-2xl font-black text-[#1f9d68]">
                                    🎉 Yay!
                                </h4>

                                <p className="mt-2 text-sm font-extrabold leading-6 text-[#247b59]">
                                    {successMessage}
                                </p>
                            </div>
                        )}

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-4 font-semibold text-rose-600">
                                {errorMessage}
                            </div>
                        )}

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-extrabold text-[#17225f]">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-xl border border-[#dce5f4] bg-white px-4 py-3 text-[#17225f] outline-none transition focus:border-[#ff5ba8] focus:ring-4 focus:ring-[#ff5ba8]/15"
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm font-semibold text-rose-500">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-extrabold text-[#17225f]">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full rounded-xl border border-[#dce5f4] bg-white px-4 py-3 text-[#17225f] outline-none transition focus:border-[#ff5ba8] focus:ring-4 focus:ring-[#ff5ba8]/15"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/i,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p className="mt-1 text-sm font-semibold text-rose-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="mb-2 block text-sm font-extrabold text-[#17225f]">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full rounded-xl border border-[#dce5f4] bg-white px-4 py-3 text-[#17225f] outline-none transition focus:border-[#ff5ba8] focus:ring-4 focus:ring-[#ff5ba8]/15"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message:
                                            "Enter a valid 10-digit number",
                                    },
                                })}
                            />

                            {errors.phone && (
                                <p className="mt-1 text-sm font-semibold text-rose-500">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="pink-button inline-flex w-full items-center justify-center gap-3 rounded-xl py-4 font-black text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Yes! I Want to Join"}

                            <FaPaperPlane size={14} />
                        </button>

                    </form>
                </div>

                {/* Robot Card */}
                <div className="relative mx-auto hidden w-full max-w-md justify-center lg:flex">
                    <div className="absolute inset-x-0 bottom-8 h-32 rounded-[50%] bg-[#b7ecff]/70 blur-2xl" />

                    <div className="soft-card relative rounded-[2.4rem] p-8 text-center">

                        <div className="mx-auto grid h-28 w-28 place-items-center rounded-[2rem] bg-[#dff3ff] text-[#263a9b] shadow-inner">
                            <FaRobot size={56} />
                        </div>

                        <div className="mt-6 rounded-[2rem] border-2 border-[#7edce5] bg-white p-5 text-lg font-black text-[#263a9b]">
                            Let's build the future together!
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default RegistrationForm;