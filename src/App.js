import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ResumeSection from "./components/ResumeSection";
import Tools from "./components/Tools";
import AchievementsTicker from "./components/AchievementsTicker";
import Education from "./components/Education";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <AchievementsTicker />
      <Education />
      <Tools /> 
<Contact />
       <ResumeSection /> 
       
    </>
  );
}

export default App;
