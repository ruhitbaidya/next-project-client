import Link from "next/link";
import Logo from "./Logo";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="py-[50px]">
      <div className="conatiner mx-auto px-[10px]">
        <div className="text-center">
          <div className="flex justify-center items-center">
            <Logo />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,{" "}
            <br />
            cum! Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <hr className="border-2 w-[70%] mx-auto my-[30px]" />
        <div>
          <ul className="flex gap-[30px] mx-auto w-[50%] items-center justify-center">
            <li className="flex justify-center items-center">
              <Link href="/">Home</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/">About</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/">Services</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/">Shipping</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/">Category</Link>
            </li>
            <li className="flex justify-center items-center">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-[20px] gap-[30px]">
          <button>
            <FaFacebook size={30} />
          </button>
          <button>
            <FaInstagram size={30} />
          </button>
          <button>
            <FaXTwitter size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
