import { FaCheckCircle } from "react-icons/fa";
import { workshopData } from "../data/workshopData";
import robotImage from "../assets/images/robot.png";

const LearningOutcomes = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            What Will Kids Learn?
          </h2>

          <p className="text-slate-500 mt-4">
            Hands-on skills through exciting AI and robotics projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <img
              src={robotImage}
              alt="Learning Robot"
              className="max-w-sm w-full"
            />
          </div>

          {/* Right Side */}
          <div className="space-y-5">

            {workshopData.outcomes.map((outcome, index) => (
              <div
                key={index}
                className="
                  flex items-start gap-4
                  p-5
                  rounded-2xl
                  border border-slate-200
                  hover:shadow-lg
                  hover:border-purple-300
                  transition-all duration-300
                "
              >
                <FaCheckCircle
                  size={22}
                  className="text-purple-600 mt-1"
                />

                <p className="text-slate-700">
                  {outcome}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default LearningOutcomes;