import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
function Footer() {
  return (
    <div className="flex gap-5 bg-gray-900 h-16 items-center justify-center">
      <div className="">
        <ul className="text-white flex gap-5">
          <li className="hover:text-green-500">
            <Link target="_blank" to="https://wa.me/5198130460">
              <FaWhatsapp className="text-2xl" />
            </Link>
          </li>
          <li className="hover:text-pink-500">
            <Link target="_blank" to="https://www.instagram.com/binancebrasil/">
              <FaInstagram className="text-2xl" />
            </Link>
          </li>
          <li className="hover:text-red-500">
            <Link target="_blank" to="https://www.youtube.com/@BinanceYoutube">
              <FaYoutube className="text-2xl" />
            </Link>
          </li>
          <li className="hover:text-blue-500">
            <Link target="_blank" to="https://www.facebook.com/binance">
              <FaFacebook className="text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
