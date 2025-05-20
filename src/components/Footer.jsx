import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer >
      <section data-theme='abyss' >
        <div className="flex justify-between px-2 py-5 w-11/12 mx-auto">
          <div>
            <ul>
                <li className="hover:underline">Contact</li>
              <li className="hover:underline">Terms of service</li>
              <li className="hover:underline">Privacy Policy</li>
             
            </ul>
          </div>

          <div>
            <h2>Social</h2>
            <div className="flex gap-2">
            <a href="https://www.facebook.com"
      target="_blank"><FaFacebook></FaFacebook></a>
            <a href="//www.http://instagram.com/"
      target="_blank"> <BsInstagram></BsInstagram> </a>
            <a href="https://twitter.com"
      target="_blank"><BsTwitter></BsTwitter></a>
            </div>

          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

