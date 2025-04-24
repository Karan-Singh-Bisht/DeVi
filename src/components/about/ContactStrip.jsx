import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactStrip() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-gray-800 text-md font-medium pb-6 px-12 rounded-lg">
      <div className="flex items-center gap-2 font-openSans">
        <FaMapMarkerAlt className="text-primary w-6 h-6" />
        <span>Hyderabad, Telangana 500080</span>
      </div>
      <div className="flex items-center gap-2 font-openSans">
        <FaPhoneAlt className="text-primary w-6 h-6" />
        <span>9100000010</span>
      </div>
      <div className="flex items-center gap-2 font-openSans">
        <FaEnvelope className="text-primary w-6 h-6" />
        <span>care@dv.harsar.in</span>
      </div>
    </div>
  );
}
