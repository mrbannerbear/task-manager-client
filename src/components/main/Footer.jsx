import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-blue-100 text-base-content rounded">
        <nav>
            Join Us On:
          <div className="grid grid-flow-col gap-4 text-2xl">
            <span>
                <a target="_blank" href="https://facebook.com/" className="hover:text-blue-600" rel="noreferrer">
                    <FaFacebook></FaFacebook>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://instagram.com/" className="hover:text-pink-600" rel="noreferrer">
                    <FaInstagram></FaInstagram>
                </a>
            </span>
            <span>
                <a target="_blank" href="https://twitter.com/" className="hover:text-black" rel="noreferrer">
                    <FaXTwitter></FaXTwitter>
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