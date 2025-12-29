"use client";

import { useCallback, useEffect, useState } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
import { Button } from "../button";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-20"
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: isVisible ? 1 : 0, right: isVisible ? 16 : -10 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            className="shadow-lg shadow-blue-400/20"
            onClick={scrollToTop}
          >
            <TbArrowNarrowUp size={18} />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
