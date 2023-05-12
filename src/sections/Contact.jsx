import { useState } from "react";
import { send } from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faCircleXmark,
  faFaceSadCry,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const [emailError, setEmailError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await send(
        "service_aufe4r6",
        "template_zrkhfe6",
        formData,
        "9_9mEiM-sQeZ4MSDl"
      );
      console.log("EMail sent successfully");
      setEmailError(false);
      setShowNotification(true);
    } catch (err) {
      console.error("error sending email: ", err);
      setEmailError(true);
      setShowNotification(true);
    }
    setFormData({ name: "", email: "", message: "" });
  };

  const disabled =
    formData.name === "" || formData.email === "" || formData.message === "";

  return (
    <div
      className="flex flex-col gap-2 justify-center items-center h-screen "
      id="contact"
    >
      {showNotification ? (
        emailError ? (
          <div className="bg-rose-400 p-2 flex items-center gap-3 h-fit rounded-lg ">
            <FontAwesomeIcon icon={faFaceSadCry} />
            <span>Please email me directly at sean@tolbert.me</span>
            <button
              className="text-2xl"
              onClick={() => setShowNotification(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        ) : (
          <div className="bg-green-400 p-2 flex items-center gap-3 h-fit rounded-lg ">
            <FontAwesomeIcon icon={faCheck} />
            <span>Email sent, thank you for your message!</span>
            <button
              className="text-2xl"
              onClick={() => setShowNotification(false)}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>
        )
      ) : null}
      <div className="p-5 w-full md:w-1/2 xl:w-2/5 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-3xl pb-10 uppercase">Contact me</h2>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
          <div className="flex justify-evenly items-center gap-5 group">
            <label
              htmlFor="contact-name"
              className="w-1/4 transition-all duration-150 uppercase group-hover:tracking-[8px]"
            >
              Name
            </label>
            <input
              id="contact-text"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              className="bg-transparent border-b-2 transition-all duration-150 border-gray-400 group-hover:border-white w-3/4 pb-2"
            />
          </div>
          <div className="flex justify-evenly items-center gap-5 group">
            <label
              htmlFor="contact-email"
              className="w-1/4 transition-all duration-150 uppercase group-hover:tracking-[8px]"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className="bg-transparent transition-all duration-150 border-gray-400 group-hover:border-white border-b-2 w-3/4 pb-2"
            />
          </div>
          <div className="flex justify-evenly items-start gap-5 group">
            <label
              htmlFor="contact-message"
              className="w-1/4 uppercase transition-all duration-150 group-hover:tracking-[3px]"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              value={formData.message}
              onChange={handleChange}
              name="message"
              className="transition-all duration-150 border-gray-400 group-hover:border-white bg-transparent w-3/4 pb-2 border-b-2"
            />
          </div>
          <button
            className="text-right disabled:text-slate-600 text-slate-300 transition duration-500 disabled:tracking-tight tracking-[5px] uppercase"
            type="submit"
            disabled={disabled}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
