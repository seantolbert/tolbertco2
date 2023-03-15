import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name: " + name);
    console.log("email: " + email);
    console.log("message: " + message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen" id="contact">
      <div className="p-10 border md:w-1/2 xl:w-2/5 bg-white rounded-xl">
        <h2 className="text-3xl">Contact me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex justify-evenly items-center gap-5 group">
            <label htmlFor="contact-name" className="w-1/4 text-center transition-all duration-150 uppercase group-hover:tracking-[8px]">Name</label>
            <input
              id="contact-text"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="bg-transparent border-b-2 transition-all duration-150 group-hover:border-black w-3/4 p-2"
            />
          </div>
          <div className="flex justify-evenly items-center gap-5 group">
            <label htmlFor="contact-email" className="w-1/4 text-center transition-all duration-150 uppercase group-hover:tracking-[8px]">Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="bg-transparent transition-all duration-150 group-hover:border-black border-b-2 w-3/4 p-2"
            />
          </div>
          <div className="flex justify-evenly items-start gap-5 group">
            <label htmlFor="contact-message" className="w-1/4 text-center uppercase transition-all duration-150 group-hover:tracking-[6px]">Message</label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="transition-all duration-150 group-hover:border-black bg-transparent w-3/4 p-2 border-b-2"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
