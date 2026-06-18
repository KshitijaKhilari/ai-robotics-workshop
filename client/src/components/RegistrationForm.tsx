import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
};

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);

      console.log(data);

      // API call will come here later

      alert("Registration Successful!");

      reset();
    } catch (error) {
      console.error(error);
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