import { motion } from "framer-motion";
import Google from "./Google";
import AppStore from "./Button";

export default function Download() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-[68vw] items-center justify-center bg-gray-200 rounded-3xl py-12 px-6 md:px-16">
        {/* Left Side - Text & Buttons */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center md:text-left "
        >
          <h1 className="text-[4vw] font-bold">
            <span className="text-purple-600">Get</span> the App
          </h1>
          <p className="text-gray-600">
            And discover the UAE's most rewarding services.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <Google />
            <AppStore />
          </div>
        </motion.div>

        {/* Right Side - 3D Model */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:w-1/2 mt-8 md:mt-0"
        >
          <img
            src="../public/image/farmer.png"
            alt="3D Character"
            className="w-full max-w-sm mx-auto"
          />
        </motion.div>
      </div>
    </>
  );
}
