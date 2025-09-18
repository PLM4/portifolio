"use client";

import { useCallback, useEffect, useState } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
import { Button } from "../button";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    if (!isVisible && window.scrollY > 500) setIsVisible(true);
    else if (isVisible && window.scrollY <= 500) setIsVisible(false);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="fixed bottom-4 right-4 z-20">
      {isVisible ? (
        <Button className="shadow-lg shadow-blue-400/20" onClick={scrollToTop}>
          <TbArrowNarrowUp size={18} />
        </Button>
      ) : null}
    </div>
  );
};
