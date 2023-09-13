import AboutMe from "@/components/About/AboutMe";
import AboutSkills from "@/components/About/AboutSkills";

const AboutPage = () => {
  return (
    <section
      className={`flex flex-col justify-evenly h-[${
        window.innerHeight * 2
      }] w-[80vw] md:h-[85vh] lg:h-[75vh] xl:h-[70vh]`}
    >
      Introduction
      <AboutMe />
      Skills
      <AboutSkills />
    </section>
  );
};

export default AboutPage;
