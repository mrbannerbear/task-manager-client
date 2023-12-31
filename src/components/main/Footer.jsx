import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-blue-100 text-base-content rounded">
        <nav>
            Join Us On:
          <div className="grid grid-flow-col gap-4">
            <span>
                <a target="_blank" href="https://facebook.com/" className="text-2xl hover:text-blue-600" rel="noreferrer">
                    <FaFacebook className="text-2xl"></FaFacebook>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://instagram.com/" className="text-2xl hover:text-pink-600" rel="noreferrer">
                    <FaInstagram className="text-2xl"></FaInstagram>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://twitter.com/" className="text-2xl hover:text-black" rel="noreferrer">
                    <FaXTwitter className="text-2xl"></FaXTwitter>
                </a>
            </span>
          </div>
        </nav> 
        <aside>
          <p className="text-xs">Copyright © { new Date().getFullYear() } - ProjectPilot</p>
        </aside>
      </footer>
    );
};

export default Footer;