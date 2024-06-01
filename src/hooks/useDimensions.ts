import { useState, useEffect } from "react";

interface Dimensions {
  width: number ;
  height: number ;
}

const getDimensions = (): Dimensions => {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return {
        width: innerWidth,
        height: innerHeight,
      };
    }

    return { width: 1280, height: 1280 };
  };

const useDimensions = (): Dimensions => {

  const [dimensions, setDimensions] = useState<Dimensions>(getDimensions());

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = (): void => {
        setDimensions(getDimensions());
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return dimensions;
}

export default useDimensions;
