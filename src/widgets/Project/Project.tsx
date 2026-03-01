import CardList from "../../shared/ui/Card/CardList";
import Title from "@/shared/ui/Title/Title";
const Project = () => {
  return (
    <section id="projects" className="section">
      <Title
        title="프로젝트 상세"
        description="주요 업무 내용 및 프로젝트 상세 내용입니다."
      />
      <CardList />
    </section>
  );
};

export default Project;
