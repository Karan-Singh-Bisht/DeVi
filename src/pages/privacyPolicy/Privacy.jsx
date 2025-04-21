import React from "react";
import { useNavigate } from "react-router";
import { IoChevronBack } from "react-icons/io5";

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="min-h-screen px-6 md:px-12 pb-2 bg-white text-black">
        {/* Back Button */}
        <button
          className="w-[15vw] h-[8vh] sm:w-20 md:w-24 lg:w-[5vw] md:h-[10vh] flex items-center justify-center bg-black rounded-b-full"
          onClick={() => navigate(-1)}
        >
          <IoChevronBack className="text-white text-[6vw] md:text-[4vw] sm:text-[6vw] lg:text-[3vw]" />
        </button>

        {/* Header */}
        <div className="text-center flex flex-col items-center mb-10">
          <div className="flex justify-center items-center">
            <img
              src="/image/homePage/1_3.png"
              alt="Logo"
              className="w-16 mb-4"
            />
            <img src="/image/homePage/1_4.png" alt="Logo" className="w-32" />
          </div>
          <h2 className="text-3xl mt-2 font-semibold">Privacy Policy</h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-5 text-justify text-sm md:text-base leading-7">
          <p>
            HarSar Infonics Pvt Ltd built the DeVi platform as a Freemium Model.
            This SERVICE is provided by HarSar Infonics Pvt Ltd at no cost and
            is intended for use as is.
          </p>
          <p>
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information if anyone
            decides to use our Service. By choosing to use our Service, you
            agree to the collection and use of information in relation to this
            policy.
          </p>
          <p>
            The Personal Information that we collect is used for providing and
            improving the Service. We will not use or share your information
            with anyone except as described in this Privacy Policy.
          </p>
          <p>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at DeshVihar unless
            otherwise defined in this Privacy Policy.
          </p>

          <h3 className="font-semibold text-lg">
            Information Collection and Use
          </h3>
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to contact details. This information will
            be retained and used as described in this privacy policy.
          </p>
          <p>
            The app does use third-party services that may collect information
            used to identify you. These include:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Google Play Services</li>
            <li>Google Analytics for Firebase</li>
            <li>Firebase Crashlytics</li>
          </ul>

          <h3 className="font-semibold text-lg">Log Data</h3>
          <p>
            Whenever you use our Service, in a case of an error in the app, we
            collect data and information (through third-party products) on your
            phone called Log Data. This may include:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Device IP address</li>
            <li>Device name</li>
            <li>Operating system version</li>
            <li>App configuration when using our Service</li>
            <li>Time and date of use</li>
            <li>Other related statistics</li>
          </ul>

          <h3 className="font-semibold text-lg">Cookies</h3>
          <p>
            Cookies are files with a small amount of data commonly used as
            anonymous unique identifiers. They are sent to your browser and
            stored on your device’s internal memory.
          </p>
          <p>
            This Service does not use cookies explicitly. However, third-party
            code and libraries may use cookies to collect information and
            improve their services. You can choose to accept or refuse cookies,
            but note that disabling them may affect certain functionalities of
            the Service.
          </p>

          <h3 className="font-semibold text-lg">Service Providers</h3>
          <p>
            We may employ third-party companies and individuals for the
            following reasons:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>To facilitate our Service</li>
            <li>To provide the Service on our behalf</li>
            <li>To perform Service-related services</li>
            <li>To assist us in analyzing how our Service is used</li>
          </ul>
          <p>
            These third parties may have access to your Personal Information to
            perform their tasks, but they are obligated not to disclose or use
            the information for any other purpose.
          </p>

          <h3 className="font-semibold text-lg">Security</h3>
          <p>
            We value your trust in providing us your Personal Information and
            strive to use commercially acceptable means of protecting it.
            However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="font-semibold text-lg">Links to Other Sites</h3>
          <p>
            This Service may contain links to other websites. If you click on a
            third-party link, you will be directed to that site. We strongly
            advise reviewing the Privacy Policy of these sites. We have no
            control over and assume no responsibility for their content,
            policies, or practices.
          </p>

          <h3 className="font-semibold text-lg">Children’s Privacy</h3>
          <p>
            These Services are not intended for anyone under the age of 13. We
            do not knowingly collect personally identifiable information from
            children under 13. If we discover that a child under 13 has provided
            us personal information, we will delete it immediately. If you are a
            parent or guardian and believe your child has shared such
            information, please contact us.
          </p>

          <h3 className="font-semibold text-lg">
            Changes to This Privacy Policy
          </h3>
          <p>
            We may update our Privacy Policy from time to time. You are advised
            to review this page periodically for changes. Updates will be posted
            here.
          </p>
          <p className="italic">This policy is effective as of 2025-07-01.</p>

          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            feel free to contact us at{" "}
            <a
              href="mailto:infonics@harsar.in"
              className="text-blue-600 underline"
            >
              infonics@harsar.in
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
