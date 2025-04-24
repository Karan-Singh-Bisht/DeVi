import React, { useEffect, useRef, Suspense } from "react";
import Homepage from "./aboutPages/Homepage";
import SecondPage from "./aboutPages/SecondPage";
import Service from "./aboutPages/Service";
import { useLocation } from "react-router";
import Footer from "../../components/about/Footer";
import Contact from "./aboutPages/Contact";

// Lazy-loaded components
const ResponsiveHorizontalComponent = React.lazy(() =>
  import("../../components/about/HorizontalScroll")
);
const GetTheApp = React.lazy(() => import("./aboutPages/GetTheApp"));
const Work = React.lazy(() => import("./aboutPages/Work"));
const HorizontalScrollCarousel = React.lazy(() =>
  import("../../components/about/HorizontalScrollCarousel")
);
const StackCard = React.lazy(() => import("./aboutPages/StackCard"));
const Testimonials = React.lazy(() => import("./aboutPages/Testimonials"));
const Awards = React.lazy(() => import("./aboutPages/Awards"));
const JoinTheTeam2 = React.lazy(() => import("./aboutPages/JoinTheTeam2"));
const Questions = React.lazy(() => import("./aboutPages/Questions"));
const BottomCard = React.lazy(() => import("./aboutPages/BottomCard"));

const About = () => {
  const location = useLocation();
  const contactRef = useRef(null);
  const FAQRef = useRef(null);

  useEffect(() => {
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (location.hash === "#FAQ" && FAQRef.current) {
      FAQRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Homepage />
      <SecondPage />
      <Service />

      <Suspense fallback={<div>Loading...</div>}>
        <ResponsiveHorizontalComponent />
        <BottomCard />
        <GetTheApp />
        <Work />
        <HorizontalScrollCarousel />
        <StackCard />
        <Testimonials />
        <Awards />
        <div ref={FAQRef} id="FAQs">
          <Questions />
        </div>
        <JoinTheTeam2 />
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
