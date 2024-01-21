import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

type ContactFormProps = {
  contactFormData: {
    TITLE: string;
    FORM_CONTENT: string;
    NAME: string;
    SURNAME: string;
    EMAIL: string;
    OPTION: string;
    TELEPHONE: string;
    MESSAGE: string;
    PRIVACY_1: string;
    PRIVACY_2: string;
    SEND: string;
  },
  language: string | undefined;
};

const ContactForm: React.FC<ContactFormProps> = ({ language, contactFormData }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [shakePolicyButton, setShakePolicyButton] = useState(false);

  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(false); //pasarlo a false cuando esté recaptcha

  const handleVerify = (token: any) => {
    if (token) {
      setToken(true);
    }
  };

  const handleSwitchClick = () => {
    setIsPolicyAccepted(!isPolicyAccepted);
    setShakePolicyButton(false);
  };

  const [phonePrefix, setPhonePrefix] = useState("+34");

  const handlePrefixChange = (e: any) => {
    setPhonePrefix(e.target.value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!isPolicyAccepted) {
      event.preventDefault();
      setShakePolicyButton(true);
      setTimeout(() => setShakePolicyButton(false), 500);
      return;
    }

    if (!token) {
      Swal.fire({
        icon: "error",
        color: "#fff",
        title: "Error",
        text: "Verificación recaptcha invalida, por favor, inténtelo de nuevo después de recargar la página.",
        background: "#000",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "¡Entendido!",
      });
      return;
    }

    setLoading(true); // Asumo que quieres establecer loading a true antes de enviar el formulario

    const fullPhoneNumber = `${phonePrefix}${formData.phoneNumber}`;

    emailjs
      .send(
        "service_dtlciu3", // ID del servicio
        "template_yg4dju8", // ID de la plantilla
        {
          from_name: formData.firstName,
          from_lastName: formData.lastName,
          from_email: formData.email,
          from_phone: fullPhoneNumber,
          from_message: formData.message,
          to_name: "Spai Home",
          to_email: "contact@elevancelab.com",
        },
        "FJ1U0bEoZeny6preT" // Clave pública
      )
      .then((result) => {
        setLoading(false);

        Swal.fire({
          icon: "success",
          color: "#fff",
          title: "¡Éxito!",
          text: "Tu formulario se envió correctamente. Te contactaremos lo antes posible.",
          background: "#000",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "¡Entendido!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
        setIsPolicyAccepted(false);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          color: "#fff",
          title: "Error",
          text: "Hubo un problema al enviar el formulario.",
          background: "#000",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "¡Entendido!",
        });
      });
  };

  //bg-gradient-to-b from-[#0c0c0c] from-40% via-yellow-500 via-50% to-[#0c0c0c] to-60%
  return (
    <>
      <div className="isolate bg-gray-200 bg-gradient-to-b from-[#0c0c0c] from-0% via-gray-600 via-30% to-gray-500 to-50% py-12 px-4">
        
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl uppercase font-bold tracking-tight text-yellow-500 sm:text-4xl">
            {contactFormData.TITLE}
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          ref={formRef}
          action="#"
          method="POST"
          className="mx-auto mt-8 max-w-6xl"
        >
          <div className="relative">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 border p-16 bg-gray-100 pb-32 sm:pb-16 rounded-xl">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {contactFormData.NAME}
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    name="firstName"
                    id="first-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {contactFormData.SURNAME}
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    name="lastName"
                    id="last-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {contactFormData.EMAIL}
                </label>
                <div className="mt-2.5">
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {contactFormData.TELEPHONE}
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="h-full uppercase rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-2 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      onChange={handlePrefixChange}
                    >
                      <option value="+34">ES (+34)</option>
                      <option value="OTRO -->">{contactFormData.OPTION}</option>
                    </select>
                  </div>
                  <input
                    required
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    name="phoneNumber"
                    id="phone-number"
                    className=" block w-full rounded-md px-3.5 py-2 pl-40 sm:pl-32  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  {contactFormData.MESSAGE}
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    id="message"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
              <div
                className={`flex gap-x-4 sm:col-span-2 ${
                  shakePolicyButton ? "shake-animation" : ""
                }`}
              >
                <div className="flex h-6 items-center">
                  <button
                    type="button"
                    onClick={handleSwitchClick}
                    className={`switch-button ${
                      isPolicyAccepted ? "bg-amber-600" : "bg-gray-200"
                    } flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                    role="switch"
                    aria-checked={isPolicyAccepted}
                    aria-labelledby="switch-1-label"
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={`${
                        isPolicyAccepted ? "translate-x-3.5" : "translate-x-0"
                      } h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out`}
                    ></span>
                  </button>
                </div>
                <label
                  className="text-sm leading-6 text-gray-600"
                  id="switch-1-label"
                >
                  <span> {contactFormData.PRIVACY_1} </span>
                  <a
                    href={
                      language === "es"
                        ? "/politica-privacidad"
                        : `/${language}/politica-privacidad`
                    }
                    className="font-semibold text-amber-500 hover:text-amber-600"
                  >
                    {contactFormData.PRIVACY_2}
                  </a>
                </label>
              </div>
            </div>
            <div className="flex justify-center -mt-24 sm:absolute right-0 bottom-2">
              <GoogleReCaptchaProvider
                container={{
                  element: "captcha",
                  parameters: {
                    badge: "inline",
                  },
                }}
                reCaptchaKey="6LdQWBkoAAAAAKSyo7gcO9nK6RpdKhJOlS4L7Ch7"
              >
                <GoogleReCaptcha onVerify={handleVerify} />
              </GoogleReCaptchaProvider>
            </div>
          </div>

          <div className="mt-12">
            <button
              type="submit"
              className="block w-full rounded-md bg-amber-500 duration-300 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {contactFormData.SEND}
            </button>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
