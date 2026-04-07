import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaReddit} from 'react-icons/fa';
function Footer(){
    return(
        <div className="flex gap-5 bg-gray-900 h-16 items-center justify-center">
            <ul className="text-white flex gap-5">
                <li className="hover:text-green-500"><Link target="_blank" to="https://wa.me/5198130460"><FaWhatsapp className="text-2xl" /></Link></li>
                <li className="hover:text-blue-400"><Link target="_blank" to="https://x.com/binance"><FaTwitter className="text-2xl" /></Link></li>
                <li className="hover:text-pink-500"><Link target="_blank" to="https://www.instagram.com/binancebrasil/"><FaInstagram className="text-2xl" /></Link></li>
                <li className="hover:text-red-500"><Link target="_blank" to="https://www.youtube.com/@BinanceYoutube"><FaYoutube className="text-2xl" /></Link></li>
                <li className="hover:text-blue-500"><Link target="_blank" to="https://www.facebook.com/binance"><FaFacebook className="text-2xl" /></Link></li>
                <li className="hover:text-orange-500"><Link target="_blank" to="https://www.reddit.com/r/binance/"><FaReddit className="text-2xl" /></Link></li>
                
            </ul>
        </div>
    )
}
export default Footer;