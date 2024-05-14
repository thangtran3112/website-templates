import { useEffect, useState } from "react";
import { Footer, GotTopButton, Header, Loader, MobileMenu } from "./components";
import {
  About,
  Contact,
  Hero,
  Products,
  Services,
  Team,
  Testimonials,
} from "./views";

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    document.body.classList.add("overflow-hidden");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    document.body.classList.remove("overflow-hidden");
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Header onToggleMenu={handleToggleMenu} />
      <Hero />
      <Services />
      <Products />
      <Team />
      <About />
      <Testimonials />
      <Contact />
      <GotTopButton />
      <MobileMenu isOpen={isMenuOpen} isClose={handleCloseMenu} />
      <Loader isLoading={isLoading} />
      <Footer />
    </>
  );
};
