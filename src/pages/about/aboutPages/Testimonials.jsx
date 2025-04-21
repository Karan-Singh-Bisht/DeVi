import { motion } from "framer-motion";
import ExperienceCard from "../../../components/about/ExperienceCard";

const testimonials = [
  {
    image: "/image/aboutPage/11_1.png",
    bgColor: "#D1C4E9",
    title: "Gamer",
    para: "I appreciate the convenience of being able to experience destinations from the comfort of my own home.",
  },
  {
    image: "/image/aboutPage/11_2.png",
    bgColor: "#CFD8DC",
    title: "Youtuber",
    para: "I appreciate the convenience of being able to experience destinations from the comfort of my own home.",
  },
  {
    image: "/image/aboutPage/11_3.png",
    bgColor: "#B39DDB",
    title: "Student",
    para: "I appreciate the convenience of being able to experience destinations from the comfort of my own home.",
  },
  {
    image: "/image/aboutPage/11_4.png",
    bgColor: "#E0F7FA",
    title: "Employee",
    para: "I appreciate the convenience of being able to experience destinations from the comfort of my own home.",
  },
  {
    image: "/image/aboutPage/11_5.png",
    bgColor: "#ECEFF1",
    title: "Entrepreneur",
    para: "I appreciate the convenience of being able to experience destinations from the comfort of my own home.",
  },
];

const Testimonials = () => {
  return (
    <section className="text-center pb-10 w-full min-h-screen flex flex-col justify-center p-[5vw] sm:p-[4vw] md:p-[3vw] bg-[#EAF1F4]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[10vw] sm:text-[4vw] md:text-[3vw] text-center pb-[5vw] font-bold">
          <span className="text-blue-600">DiVians</span> Fabulous Experience's
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {testimonials.map((item, index) => (
            <ExperienceCard
              key={index}
              image={item.image}
              bgColor={item.bgColor}
              title={item.title}
              para={item.para}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
