import { CAREER_DATA } from "../../shared/constans/careerData";
import { CareerItem } from "../../shared/ui/Career/CareerItem";

const Career = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-black mb-24 text-center">
          경력사항
        </h2>

        <div className="space-y-20">
          {CAREER_DATA.map((item, index) => (
            <CareerItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
