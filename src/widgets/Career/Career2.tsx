import { CAREER_DATA } from "../../shared/constans/careerData";
import { CareerItem2 } from "../../shared/ui/Career/CareerItem2";

const Career2 = () => {
  return (
    <section className="bg-white px-6 py-24 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        {/* 타이틀 */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-black">
            업무 경험
          </h2>
          <p className="mt-3 text-sm text-neutral-400">
            실무 · 운영 · 퍼블리싱 · 프론트엔드 개발 경험
          </p>
        </div>

        {/* 리스트 */}
        <div className="space-y-5">
          {CAREER_DATA.map((item) => (
            <CareerItem2 key={`${item.title}-${item.period}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career2;
