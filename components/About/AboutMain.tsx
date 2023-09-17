import AboutMe from "@/components/About/AboutMe";
import { useWindowSize } from "usehooks-ts";

const AboutPage = () => {
  const { height } = useWindowSize();
  return (
    <section
      className={`flex flex-col justify-evenly h-[${
        height * 2
      }] w-[80vw] md:h-[85vh] lg:h-[75vh] xl:h-[70vh]`}
    >
      <AboutMe />
    </section>
  );
};

export default AboutPage;
