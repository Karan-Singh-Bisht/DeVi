import { motion } from "framer-motion";
import JoinButton from "../../../components/about/JoinButton";

const Awards = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <motion.div
        className="w-full flex gap-5 flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[6vw] sm:text-[4vw] md:text-[3vw] font-poppins font-bold text-gray-900 text-center">
          Bulletin Board
        </h2>
        <p className="text-gray-500 text-xl font-semibold font-openSans my-2 text-center">
          News & Awards & Milestones
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <motion.img
            initial={{ x: -250, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/image/aboutPage/12_1.jpeg"
            alt="Award 1"
            className="w-[4rem] sm:w-[5rem] md:w-[6rem] h-auto rounded-md shadow-md"
          />
          <motion.img
            initial={{ x: 250, y: 30, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/image/aboutPage/12_2.jpeg"
            alt="Award 2"
            className="w-[4rem] sm:w-[5rem] md:w-[6rem] h-auto rounded-md shadow-md"
          />
        </div>

        <h3 className="text-2xl sm:text-xl font-openSans font-semibold text-gray-500 mt-8 mb-[1vw] text-center">
          Partners & Supporters
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-6 mt-4 w-full mb-[2vw]">
          <img
            src="/image/aboutPage/12_3.png"
            alt="Partner 1"
            className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto rounded-md"
          />
          <img
            src="/image/aboutPage/12_4.png"
            alt="Partner 2"
            className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto rounded-md"
          />
          <img
            src="/image/aboutPage/12_5.png"
            alt="Partner 3"
            className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto rounded-md"
          />
          <img
            src="/image/aboutPage/12_6.png"
            alt="Partner 4"
            className="w-[5rem] sm:w-[6rem] md:w-[7rem] h-auto rounded-md"
          />
        </div>

        <JoinButton title={"Join With Us"}></JoinButton>
      </motion.div>
    </div>
  );
};

export default Awards;
