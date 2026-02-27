import CardList from "../../shared/ui/Card/CardList";
import Title from "@/shared/ui/Title/Title";
const Project = () => {
  return (
    <section id="projects" className="section">
      <Title
        title="프로젝트"
        description="실무 · 운영 · 퍼블리싱 · 프론트엔드 개발 경험"
      />
      <CardList />
    </section>
  );
};

export default Project;
