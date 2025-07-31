import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);

    updateWidth(); // Set initially
    window.addEventListener("resize", updateWidth); // Watch resize
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (screenWidth < 520) {
    return 1; // Small screens
  } else if (screenWidth < 720) {
    return 2; // Medium screens
  }else if (screenWidth < 1024) {
    return 3; // Medium screens
  }else if (screenWidth < 1280) {
    return 4; // Medium screens
  } else {
    return 5; // Large screens
  }
};