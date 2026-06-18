import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { faqData } from "../data/faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6 max-w-4xl">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-slate-500 mt-4">
            Answers to common questions from parents and students.
          </p>
        </div>

        <div className="space-y-4">

          {faqData.map((faq, index) => (
            <div
              key={index}
              className="
                border border-slate-200
                rounded-2xl
                overflow-hidden
                shadow-sm
              "
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  text-left
                  px-6
                  py-5
                  bg-white
                  hover:bg-slate-50
                  transition
                "
              >
                <span className="font-semibold text-slate-800">
                  {faq.question}
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;