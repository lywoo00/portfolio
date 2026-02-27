import Card from "./Card";
import projectData from "../../constans/projectData";

const CardList = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default CardList;
