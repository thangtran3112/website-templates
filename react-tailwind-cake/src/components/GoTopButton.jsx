import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowUpShort } from "react-icons/bs";

// Component that displays a button to scroll back to the top of the page when the user scrolls down.
export const GotTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function that handles the scroll event and shows or hides the button depending on the scroll position.
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function that smoothly scrolls to the top of the page.
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add an event listener for the scroll event when the component mounts.
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts to prevent memory leaks.
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty array as second argument ensures the effect runs only once when the component mounts.

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0, visibility: "hidden" }}
          animate={{ scale: 1.1, opacity: 1, visibility: "visible" }}
          exit={{ scale: 0, opacity: 0, visibility: "hidden" }}
          className="fixed bottom-10 right-10 z-40 lg:bottom-20 lg:right-20"
        >
          <div
            className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-primary-300  text-2xl text-white transition-all duration-300"
            onClick={ScrollToTop}
          >
            <BsArrowUpShort />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
