import { useState, useEffect } from "react";

export default function useDevice() {
  const [device, setDevice] = useState({
    isMobile: false,
    isPortrait: true,
  });

  useEffect(() => {
    const check = () => {
      const isMobile = window.matchMedia("(pointer: coarse)").matches;
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;

      setDevice({ isMobile, isPortrait });
    };

    check();

    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return device;
}
