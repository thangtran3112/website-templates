import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { fadeLeft, fadeRight } from "../helpers";

// Contact component responsible for displaying a contact form and handling email sending.
export const Contact = () => {
  const form = useRef();

  /*
   * Function to handle form submission and send email using emailjs.
   * @param {Event} e The form submission event.
   */
  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form data
    const formData = new FormData(form.current);
    const userName = formData.get("user_name");
    const userEmail = formData.get("user_email");
    const message = formData.get("message");

    // Validate form fields
    if (!userName || !userEmail || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Send email using emailjs
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="container mx-auto px-4 py-5 xs:px-8" id="contact">
        <div className="grid grid-cols-12 overflow-hidden rounded-lg">
          <motion.div
            className="col-span-12 h-60 sm:col-span-6 sm:h-full"
            initial="initial"
            whileInView="animate"
            variants={fadeRight}
            viewport={{
              once: true,
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5366.33466809781!2d-60.32296714171329!3d-36.8941354461124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959445c63a1e5425%3A0x7665ce016d9d6b60!2sPlaza%20Coronel%20Olavarr%C3%ADa!5e0!3m2!1ses!2sar!4v1707785251090!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <motion.div
            className="col-span-12 bg-white p-5 sm:col-span-6"
            initial="initial"
            whileInView="animate"
            variants={fadeLeft}
            viewport={{
              once: true,
            }}
          >
            <h1 className="mb-5 block text-center font-lobster text-4xl text-primary-400">
              Contact
            </h1>
            <form
              className="flex flex-col gap-5"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="rounded-lg border-2 border-slate-200 pl-2 outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                type="text"
                name="user_name"
                placeholder="Your Name"
              />
              <input
                className="rounded-lg border-2 border-slate-200 pl-2 outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                type="email"
                name="user_email"
                placeholder="Your e-mail"
              />
              <textarea
                className="resize-none rounded-lg border-2 border-slate-200 pl-2 outline-none transition-all duration-300 focus:border-primary-500 focus:ring-0"
                rows="5"
                name="message"
                placeholder="Write your message here..."
              ></textarea>
              <input
                className="w-max cursor-pointer rounded-lg bg-primary-300 px-3 py-2 font-semibold text-white transition-all duration-300 hover:bg-primary-500"
                type="submit"
                id="button"
                value="Send Message"
              />
            </form>
          </motion.div>
        </div>
      </section>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
