import React from "react";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
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
          <img src="/image/homePage/1_3.png" alt="Logo" className="w-16 mb-4" />
          <img src="/image/homePage/1_4.png" alt="Logo" className="w-32" />
        </div>
        <h2 className="text-3xl mt-2 font-semibold">Terms & Conditions</h2>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-4 text-justify text-sm md:text-base leading-7">
        <h4>
          Welcome to DeVi..! These terms and conditions outline the rules and
          regulations for the use of HarSar Infonics Pvt Ltd's Website, located
          at devi.harsar.in. By accessing this website we assume you accept
          these terms and conditions. Do not continue to use DeshVihar if you do
          not agree to take all of the terms and conditions stated on this page.
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company's terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client's
          needs in respect of provision of the Company's stated services, in
          accordance with and subject to, prevailing law of in. Any use of the
          above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
          <br />
          <br />
          <strong>Cookies</strong>
          <br />
          We employ the use of cookies. By accessing DeVi, you agreed to use
          cookies in agreement with the HarSar Infonics Pvt Ltd's Privacy
          Policy. Most interactive websites use cookies to let us retrieve the
          user's details for each visit. Cookies are used by our website to
          enable the functionality of certain areas to make it easier for people
          visiting our website. Some of our affiliate/advertising partners may
          also use cookies.
          <br />
          <br />
          <strong>License</strong>
          <br />
          Unless otherwise stated, HarSar Infonics Pvt Ltd and/or its licensors
          own the intellectual property rights for all material on DeVi. All
          intellectual property rights are reserved. You may access this from
          DeVi (DeshVihar) for your own personal use subjected to restrictions
          set in these terms and conditions. You must not:
          <ul className="list-disc ml-6">
            <li>Republish material from DeVi</li>
            <li>Sell, rent or sub-license material from DeVi</li>
            <li>Reproduce, duplicate or copy material from DeVi</li>
            <li>Redistribute content from DeVi</li>
          </ul>
          <br />
          This Agreement shall begin on the date hereof. Our Terms and
          Conditions were created with the help of the Free Terms and Conditions
          Generator. Parts of this website offer an opportunity for users to
          post and exchange opinions and information in certain areas of the
          website. HarSar Infonics Pvt Ltd does not filter, edit, publish or
          review Comments prior to their presence on the website. Comments do
          not reflect the views and opinions of HarSar Infonics Pvt Ltd, its
          agents and/or affiliates. Comments reflect the views and opinions of
          the person who post their views and opinions. To the extent permitted
          by applicable laws, HarSar Infonics Pvt Ltd shall not be liable for
          the Comments or for any liability, damages or expenses caused and/or
          suffered as a result of any use of and/or posting of and/or appearance
          of the Comments on this website. HarSar Infonics Pvt Ltd reserves the
          right to monitor all Comments and to remove any Comments which can be
          considered inappropriate, offensive or causes breach of these Terms
          and Conditions. You warrant and represent that:
          <ul className="list-disc ml-6">
            <li>
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li>
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li>
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy;
            </li>
            <li>
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>
          You hereby grant HarSar Infonics Pvt Ltd a non-exclusive license to
          use, reproduce, edit and authorize others to use, reproduce and edit
          any of your Comments in any and all forms, formats or media.
          <br />
          <br />
          <strong>Hyperlinking to our Content</strong>
          <br />
          The following organizations may link to our Website without prior
          written approval:
          <ul className="list-disc ml-6">
            <li>Social Medias</li>
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors</li>
            <li>System wide Accredited Businesses</li>
          </ul>
          These organizations may link to our home page, to publications or to
          other Website information so long as the link:
          <ul className="list-disc ml-6">
            <li>is not in any way deceptive;</li>
            <li>
              does not falsely imply sponsorship, endorsement or approval of the
              linking party and its products and/or services;
            </li>
            <li>fits within the context of the linking party's site.</li>
          </ul>
          We may consider and approve other link requests from the following
          types of organizations: commonly-known consumer and/or business
          information sources; dot.com community sites; associations or other
          groups representing charities; online directory distributors; internet
          portals; accounting, law and consulting firms; and educational
          institutions and trade associations.
          <br />
          <br />
          <strong>iFrames</strong>
          <br />
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
          <br />
          <br />
          <strong>Content Liability</strong>
          <br />
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
          <br />
          <br />
          <strong>Reservation of Rights</strong>
          <br />
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amend
          these terms and conditions and its linking policy at any time.
          <br />
          <br />
          <strong>Removal of links from our website</strong>
          <br />
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us at any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
          <br />
          <br />
          <strong>Disclaimer</strong>
          <br />
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
          <ul className="list-disc ml-6">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li>
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li>
              limit any of our or your liabilities in any way that is not
              permitted under applicable law;
            </li>
            <li>
              exclude any of our or your liabilities that may not be excluded
              under applicable law.
            </li>
          </ul>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer:
          <ul className="list-disc ml-6">
            <li>are subject to the preceding paragraph;</li>
            <li>
              govern all liabilities arising under the disclaimer, including
              liabilities arising in contract, in tort and for breach of
              statutory duty.
            </li>
          </ul>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </h4>
      </div>
    </div>
  );
};

export default TermsAndConditions;
