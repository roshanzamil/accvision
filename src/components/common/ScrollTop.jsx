
import { faArrowUp, faWhatsapp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Link from "next/link";

const ScrollTop = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let scroll_top = document.getElementById("scroll_top");
      let whatsapp_icon = document.getElementById("whatsapp_icon");
      if (scroll_top) {
        window.onscroll = function () {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            scroll_top.style.display = "block";
            if (whatsapp_icon) whatsapp_icon.style.display = "flex";
          } else {
            scroll_top.style.display = "none";
            if (whatsapp_icon) whatsapp_icon.style.display = "none";
          }
        };

        scroll_top.addEventListener("click", function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
      }
    }
  }, []);
  return (
    <>
      <button id="scroll_top" className="scroll-top">
        <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
      </button>
      <Link href="https://wa.me/971563506425" target="_blank" id="whatsapp_icon" className="whatsapp-icon">
        <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
      </Link>
    </>
  );
};

export default ScrollTop;
