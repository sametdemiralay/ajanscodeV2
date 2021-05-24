import React, { useState } from "react";
import emailjs from "emailjs-com";
import * as FaIcons from "react-icons/fa";
import Iframe from "react-iframe";

const index = () => {
  const [name, setName] = useState("");
  const [maill, setMaill] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isNone, setIsNone] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_3jxmopd",
        "template_1ofrctc",
        e.target,
        "user_V3TRsZpKPhPCuKqlq6smv"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setName("");
            setMaill("");
            setMessage("");
            setIsLoading(false);
            setIsNone(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );

    setTimeout(() => {
      setIsNone(false);
    }, 5000);
  }

  return (
    <div className="contactArea">
      <div className="container">
        <div className="row shadow">
          <div className="col-lg-8 col-md-12 contactArea--left">
            <form className="contact-form" onSubmit={sendEmail}>
              <div className="row">
                <div className="col-lg-6">
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    name="isim_isim"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    placeholder="Mail"
                    name="mail_mail"
                    value={maill}
                    onChange={(e) => setMaill(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    name="mesaj_mesaj"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mesaj"
                    required
                  />
                </div>
                <div className="col-lg-12 mailMessage">
                  <input type="submit" value="Gönder" />
                  {isLoading && <p className="onLoad">Gönderiliyor...</p>}
                  <p className={isNone ? "onSend" : "onSend dNone"}>
                    Mesajınız Gönderildi.
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-md-12 contactArea--right">
            <h3>Bize Ulaşın!</h3>

            <div>
              <FaIcons.FaEnvelope />
              <p>info@ajanscode.com.tr</p>
            </div>
            <div>
              <FaIcons.FaPhoneAlt />
              <span>
                <p>+90 (212) 249 4413</p>
                <p>+90 (532) 271 6500</p>
              </span>
            </div>
            <div>
              <FaIcons.FaMapMarker />
              <p>İncirli Caddesi No: 1 Kat: 1 Bakırköy / İstanbul</p>
            </div>

            <h4>Sosyal Medya Hesaplarımız:</h4>

            <di className="contactSocial">
              <span
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/AjansCode-108239344332054",
                    "_blank"
                  )
                }
              >
                <FaIcons.FaFacebookF />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ajanscode/?hl=tr",
                    "_blank"
                  )
                }
              >
                <FaIcons.FaInstagram />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/channel/UCiNBi4w7JbfyfOsTP-wZvKw",
                    "_blank"
                  )
                }
              >
                <FaIcons.FaYoutube />
              </span>
              <span
                onClick={() =>
                  window.open("https://www.linkedin.com/feed/", "_blank")
                }
              >
                <FaIcons.FaLinkedinIn />
              </span>
            </di>
          </div>
        </div>

        <div className="row mapArea">
          <div className="mapArea--divv">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.9607916937143!2d28.870912715413308!3d40.98233937930334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabca66befe88b%3A0x39a851f782fa1914!2sAJANSCODE!5e0!3m2!1str!2str!4v1621598991581!5m2!1str!2str"
              width="100%"
              height="450px"
              display="initial"
              position="relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
