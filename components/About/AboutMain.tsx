import AboutMe from "@/components/About/AboutMe";

const AboutPage = () => {
  return (
    <section
      className={`flex flex-col justify-evenly  w-[80vw] md:h-[85vh] lg:h-[75vh] xl:h-[70vh]`}
    >
      <AboutMe />
    </section>
  );
};

export default AboutPage;
