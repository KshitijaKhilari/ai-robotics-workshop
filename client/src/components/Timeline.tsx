import { FaBrain, FaProjectDiagram, FaRobot, FaTrophy } from "react-icons/fa";
import { workshopData } from "../data/workshopData";

const styles = [
  {
    icon: FaBrain,
    card: "from-[#f9e7ff] to-[#fff7ff] border-[#edc7ff]",
    pill: "bg-[#a765ff] text-white",
    iconColor: "text-[#a765ff]",
  },
  {
    icon: FaRobot,
    card: "from-[#edffef] to-[#fbfff2] border-[#c8efc9]",
    pill: "bg-[#62c76f] text-white",
    iconColor: "text-[#43b65c]",
  },
  {
    icon: FaProjectDiagram,
    card: "from-[#fff6d9] to-[#fffaf0] border-[#ffe2a2]",
    pill: "bg-[#ffbd3d] text-white",
    iconColor: "text-[#f0a000]",
  },
  {
    icon: FaTrophy,
    card: "from-[#fff1f8] to-[#fff8fb] border-[#ffc9df]",
    pill: "bg-[#ff6aae] text-white",
    iconColor: "text-[#ff5ba8]",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="kid-section bg-white/70 py-20">
      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="pastel-title text-4xl font-black sm:text-5xl">
            Workshop Journey
          </h2>
          <p className="mt-3 font-semibold text-[#667096]">
            A fun 4-week learning path.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {workshopData.timeline.map((item, index) => {
            const style = styles[index];
            const Icon = style.icon;

            return (
              <article
                key={item.week}
                className={`relative rounded-[1.7rem] border bg-gradient-to-br p-7 text-center shadow-[0_18px_35px_rgba(62,76,138,0.1)] transition hover:-translate-y-1 ${style.card}`}
              >
                <span className={`inline-flex rounded-full px-4 py-1 text-sm font-black ${style.pill}`}>
                  {item.week}
                </span>
                <div className={`mx-auto my-5 grid h-16 w-16 place-items-center rounded-2xl bg-white/80 text-3xl ${style.iconColor}`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-black text-[#17225f]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm font-semibold leading-6 text-[#485174]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
