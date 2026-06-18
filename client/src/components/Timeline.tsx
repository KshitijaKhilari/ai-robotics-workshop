import { workshopData } from "../data/workshopData";

const Timeline = () => {
  return (
    <section
  id="timeline"
  className="bg-slate-50 py-24"
>
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Workshop Journey
          </h2>

          <p className="text-slate-500 mt-4">
            A structured 4-week learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {workshopData.timeline.map((item) => (
            <div
              key={item.week}
              className="
                bg-white
                p-6
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {item.week}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Timeline;