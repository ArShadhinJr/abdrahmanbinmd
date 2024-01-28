import { useEffect, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

const TopInfo = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Use an event listener to check the screen width when it changes
    const handleResize = () => {
      setShow(window.innerWidth > 768);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty to run the effect only once on mount

  return show ? (
    <section className="container flex justify-between items-center ">
      <div className="flex content-center items-center gap-x-7">
        <div className="flex content-center items-center gap-x-3">
          <BsFillTelephoneFill />
          <p>+8801818180123</p>
        </div>
        <div className="flex content-center items-center gap-x-3">
          <IoIosMail />
          <p>abdrahmanbinmd@gmail.com</p>
        </div>
      </div>
      <div>
        <ul className="flex gap-x-7">
          <li>
            <a href="https://github.com/ArShadhinJr" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://web.facebook.com/abdrahmanbinmd/" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/abdrahmanbinmd/" target="_blank" rel="noreferrer">
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </section>
  ) : null;
};

export default TopInfo;
