import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

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
        } catch (error) {
            console.error(error);

            setErrorMessage(
                "Something went wrong. Please try again."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="registration"
            className="bg-slate-50 py-24"
        >
            <div className="container mx-auto px-6">

                <div className="max-w-2xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900">
                            Register Now
                        </h2>

                        <p className="text-slate-500 mt-4">
                            Reserve your seat for the AI & Robotics Summer Workshop.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="
              bg-white
              p-8
              rounded-3xl
              shadow-lg
              space-y-6
            "

                    >
                        {successMessage && (
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                <h4 className="font-semibold text-green-700">
                                    ✓ Registration Successful
                                </h4>

                                <p className="text-green-600 text-sm mt-1">
                                    {successMessage}
                                </p>
                            </div>
                        )}

                        {errorMessage && (
                            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                                <p className="text-red-600">
                                    {errorMessage}
                                </p>
                            </div>
                        )}

                        {/* Name */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="
                  w-full
                  border
                  border-slate-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-purple-500
                "
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />

                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                  w-full
                  border
                  border-slate-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-purple-500
                "
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter a valid email",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-2 font-medium text-slate-700">
                                Phone Number
                            </label>

                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                className="
                  w-full
                  border
                  border-slate-300
                  rounded-xl
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-purple-500
                "
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Enter a valid 10-digit number",
                                    },
                                })}
                            />

                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                w-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-500
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:scale-[1.02]
                transition-all
                disabled:opacity-50
              "
                        >
                            {isSubmitting
                                ? "Submitting..."
                                : "Register Now"}
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};

export default RegistrationForm;