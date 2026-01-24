import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0;

      const isSmallScreen = window.innerWidth <= 1024;

      setIsMobile(isTouch && isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile;
}
