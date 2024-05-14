import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

/*
 * Loader component responsible for displaying a loading indicator.
 * @param {boolean} isLoading Flag indicating whether to display the loader.
 */
export const Loader = ({ isLoading }) => {
  useEffect(() => {
    // Add or remove 'overflow-hidden' class to body based on isLoading state to prevent scrolling when loader is displayed.
    isLoading
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed top-0 z-[999] flex h-screen w-screen items-center justify-center bg-white/60 backdrop-blur"
        >
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-lobster text-2xl font-bold text-shuttle-gray-900">
              Dulzura
            </h2>
            <div className="mt-2 flex h-1 w-40 gap-1 overflow-hidden bg-gray-200">
              <div className="h-full w-20 animate-loader bg-primary-300"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
