import { motion } from "framer-motion";
import ExperienceCard from "../../../components/about/ExperienceCard";

const testimonials = [
  {
    image: "/image/aboutPage/11_1.png",
    bgColor: "#D1C4E9",
    title: "Gamer",
    para: "I matched with other local gamers and we even created a squad—super cool!",
  },
  {
    image: "/image/aboutPage/11_2.png",
    bgColor: "#CFD8DC",
    title: "Foodie",
    para: "PopPins helped me discover a trending café around the corner!",
  },
  {
    image: "/image/aboutPage/11_3.png",
    bgColor: "#B39DDB",
    title: "Student",
    para: "Helps me stay connected on campus & discover cool events nearby!",
  },
  {
    image: "/image/aboutPage/11_4.png",
    bgColor: "#E0F7FA",
    title: "Traveler",
    para: "From events to hidden gems, Mapo made every trip feel like home.",
  },
  {
    image: "/image/aboutPage/11_5.png",
    bgColor: "#ECEFF1",
    title: "Creator",
    para: "Finally a place to share content that actually reaches the right crowd!",
  },
];

const Testimonials = () => {
  return (
    <section className="text-center pb-10 w-full min-h-screen flex flex-col justify-center p-[5vw] sm:p-[4vw] md:p-[3vw]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="md:text-[5vw] text-[8vw] text-[#1C274C] font-poppins sm:text-[4vw] text-center pb-[5vw] font-bold">
          No Cap, Just&nbsp;
          <span className="text-[#8D93A5]">DVian's</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {testimonials.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
