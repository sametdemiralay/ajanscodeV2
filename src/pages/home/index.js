import React,{useState, useEffect} from "react";
import BannerPhoto from "../../images/home-banner.jpg";
import MobileBanPht from "../../images/mobile-banner.jpg";
import AboutPhoto from "../../images/homeKurumsal.jpg";
import LogoWhite from "../../images/logo-white.png";

import homeData from "./homeData.json";
import OurWorks from "./components/OurWorks";
import OurReferences from "./components/OurReferences";
import Oblique from "./components/Oblique";
import {Link} from 'react-router-dom'

const Home = () => {
  const [widthh, setWidthh]   = useState(window.innerWidth);

  // get window width
  const updateDimension = () => {
    setWidthh(window.innerWidth);
}
useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
}, []);

  return (
    <>
      {/* section-1 */}
      <div className="container-fluid secOne">
        <div className="row">
        <img src={widthh > 992 ? BannerPhoto : MobileBanPht} alt="medya ajansı" />
            <div className="secOne__title">
              <h1>AJANSCODE</h1>
            </div>
        </div>
      </div>

      {/* section-2 */}
      <div className="container secTwo">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 secTwo__photoArea">
            <img src={AboutPhoto} alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 secTwo__textArea">
            <h3 className="title">KURUMSAL</h3>
            <p>
              1987 yılından beri sektörde hizmet veren ve 1993 yılında AjansCode
              Komünikasyon Hizmetleri Ltd. Şti. olarak kurumsallaşan ajansımız,
              kuruluşundan bu yana Türkiye'nin en başarılı firmalarının tanıtım
              çalışmalarını üstlenmiştir. AjansCode Komünikasyon Hizmetleri
              olarak; deneyimli kadromuz ve iş prensibi anlayışımızla, firma ve
              ürün tanıtımlarınızda, farklı ve estetik tasarımları yaratıcı
              çalışmalara dönüştürür, farklı perspektiflerden iletişim
              stratejileri geliştirir, uygular ve uygulatırız. Biz, firmanızın
              ve reklamınızın hedef kitlenize doğru bir şekilde ulaşabilmesi ve
              etkili olabilmesi için ihtiyacınız olan çalışmayı analiz ediyor ve
              bu doğrultuda ilerliyoruz.
            </p>
            <Link to="/kurumsal" className="buttonStyle">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Devamını Oku
            </Link>
          </div>
        </div>
      </div>

      {/* İşlerimiz */}
      <section className="container2">
        {homeData.ourWorks.map((work) => (
          <OurWorks work={work} key={work.id} />
        ))}
      </section>

      {/* Referanslarımız */}
      <div className="container secFour">
        <h3 className="title">REFERANSLARIMIZ</h3>
        <div className="row">
          {homeData.ourReferences.map((referance) => (
            <OurReferences referance={referance} key={referance.id} />
          ))}
        </div>
        <Link to="/referanslar" className="buttonStyle">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Bütün Referanslarımız
        </Link>
      </div>

      {/* section-5 */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 secFive">
            <ul className="secFive__stairs">
              {homeData.obliqueArea.map((oblq) => (
                <Oblique oblq={oblq} key={oblq.id} />
              ))}
            </ul>

            <div>
              <img src={LogoWhite} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
