import { useState } from "react";
import { FaChevronDown, FaQuestionCircle, FaRobot } from "react-icons/fa";
import { faqData } from "../data/faqData";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="kid-section bg-gradient-to-br from-[#fff7fb] via-white to-[#f1fbff] py-20">
      <div className="star-field" />
      <div className="container relative z-10 mx-auto grid items-center gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_18rem]">
        <div>
          <div className="mb-10 text-center lg:text-left">
            <h2 className="pastel-title text-4xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 font-semibold text-[#667096]">
              Answers to common questions from parents and students.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={faq.question}
                className="soft-card overflow-hidden rounded-2xl"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-black text-[#17225f]">
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`shrink-0 text-[#263a9b] transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-5 pb-5 font-semibold leading-7 text-[#5a6388]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="soft-card rounded-[2rem] p-7 text-center">
            <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-[1.6rem] bg-[#efe9ff] text-[#8b65ff]">
              <FaQuestionCircle size={38} />
            </div>
            <p className="mb-6 rounded-[1.5rem] border-2 border-[#d8c8ff] bg-white p-4 font-black text-[#263a9b]">
              Good questions!
            </p>
            <FaRobot className="mx-auto text-[#4e9bff]" size={70} />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FAQ;
