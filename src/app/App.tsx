import Skills from "../widgets/Skills/Skills";
import Hero from "../widgets/Hero/Hero";
import Career from "../widgets/Career/Career";
// import Blog from "../widgets/Blog/Blog";
import Project from "../widgets/Project/Project";
import { FloatingNav } from "@/widgets/FloatingMenu/FloatingNav";
import Footer from "@/widgets/Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Career />
      <Project />
      <Footer />
      <FloatingNav />
      {/* <Blog /> */}
    </>
  );
}

export default App;
