import { CAREER_DATA } from "../../shared/constans/careerData";
import { CareerItem } from "../../shared/ui/Career/CareerItem";
import Title from "@/shared/ui/Title/Title";

const Career = () => {
  return (
    <section id="career" className="section">
      {/* 타이틀 */}
      <Title
        title="업무 경험"
        description="웹표준 · 웹 접근성 · UI/UX 운영 및 개선 업무를 담당했습니다."
      />

      {/* 리스트 */}
      <div className="space-y-5">
        {CAREER_DATA.map((item) => (
          <CareerItem key={`${item.title}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Career;
