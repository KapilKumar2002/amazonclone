import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section>
      <a
        className="bg-gray-600 p-4 text-sm text-white flex justify-center"
        href="#home"
      >
        Back to Top
      </a>
      <section className="bg-gray-800 p-10">
        <div className="min-container flex justify-between max-sm:flex-col max-sm:gap-7 gap-4">
            {footerLinks.map(e=> <div>
                <h1 className="text-md text-white font-bold font-montserrat">{e.title}</h1>
                <ul>
                    {e.links.map(data=> <li><a href={data.href} className="text-xs font-light text-white hover:underline " >{data.link}</a></li>)}
                </ul>
            </div> )}
        </div>
      </section>
      <section className="bg-gray-900 p-10 flex flex-col items-center">
        <p className="text-white font-montserrat max-sm:text-sm text-md font-semibold">Copyright © 2023 All rights reserved</p>
      </section>
    </section>
  );
};

export default Footer;
