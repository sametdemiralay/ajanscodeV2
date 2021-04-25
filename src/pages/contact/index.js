import React from "react";
import emailjs from "emailjs-com";
import GoogleMapReact from "google-map-react";
import * as FaIcons from "react-icons/fa";

const HaritaYazi = ({ text }) => (
  <div style={{ color: "#00468F", fontSize: "20px" }}>
    <FaIcons.FaMapMarker />
    {text}
  </div>
);

const index = () => {
  const konum = { lat: 40.982382, lng: 28.87283 };

  function sendEmail(e) {
    e.preventDefault();

    // emailjs
    //   .sendForm("service_3jxmopd", "template_1ofrctc", e.target, "user_V3TRsZpKPhPCuKqlq6smv")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
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
                    required
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="email"
                    placeholder="Mail"
                    name="mail_mail"
                    required
                  />
                </div>
                <div className="col-lg-12">
                  <textarea name="mesaj_mesaj" placeholder="Mesaj" required />
                </div>
                <div className="col-lg-12">
                  <input type="submit" value="Gönder" />
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
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBcmOIsGr3lc6XXtde_NE59V7CIc_0VRrw",
            }}
            defaultCenter={konum}
            defaultZoom={18}
          >
            <HaritaYazi lat={40.9823735} lng={28.8728543} text="AJANSCODE!" />
          </GoogleMapReact>
        </div>
        </div>
      </div>
    </div>
  );
};

export default index;
