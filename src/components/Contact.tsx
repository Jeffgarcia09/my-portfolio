import React, { FormEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    to_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      to_name: formData.to_name,
      to_email: formData.to_email,
      message: formData.message,
    };

    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const result = await emailjs.send(
        "service_bn85k1r",
        "template_pi2bdn5",
        templateParams,
        "TWVFg6QpftUgpT3MP"
      );

      setSuccessMessage("Email sent successfully!");
      setFormData({
        to_name: "",
        to_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setErrorMessage("Failed to send email. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMessage = () => {
    setSuccessMessage(null);
    setErrorMessage(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto lgl:px-20 py-24"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto flex flex-col items-center"
      >
        <div className="">
          <h2 className="font-titleFont text-3xl font-semibold text-textGreen flex flex-col items-center">Contact Me</h2>
          <p className="text-base font-medium text-black">Feel free to reach out anytime!</p>
        </div>
        <div className="p-2 md:w-1/2 w-full flex flex-col items-center">
          <div className="relative">
            {isLoading && <p>Loading...</p>}
            {successMessage && (
              <div
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Success!</strong>
                <span className="block sm:inline">{successMessage}</span>
                <span
                  onClick={handleShowMessage}
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                  <svg
                    className="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}
            {errorMessage && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Error</strong>
                <span className="block sm:inline">{errorMessage}</span>
                <span
                  onClick={handleShowMessage}
                  className="absolute top-0 bottom-0 right-0 px-4 py-3"
                >
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}
            <label htmlFor="name" className="leading-7 text-black text-sm">
              Name
            </label>
            <input
              type="text"
              name="to_name"
              value={formData.to_name}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              name="to_email"
              value={formData.to_email}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          
          <label className="leading-7 text-sm text-left text-black">
              Message
            </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full resize-none bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            cols={30}
            rows={7}
          ></textarea>
          </div>
          <button
            type="submit"
            className="w-36 mt-5 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Send
          </button>
        </div>
      </form>
      <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
        <a href="mailto:jeffersongarcia520@gmail.com" className="text-indigo-500">Jeffersongarcia520@gmail.com</a>
        <p className="leading-normal my-5 text-black">Dinas, Zamboanga Del Sur</p>
        <span className="inline-flex gap-2 text-black">
          <a href="https://www.facebook.com/m.Zenith.me" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/echiboijepp/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/Jeffgarcia09" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jefferson-garcia-68a588250/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
