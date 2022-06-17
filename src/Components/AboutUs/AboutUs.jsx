import React from "react";
import map from "../../assets/image/map.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PublicIcon from "@mui/icons-material/Public";
import aboutus1 from "../../assets/image/aboutus1.jpeg";
import aboutus2 from "../../assets/image/aboutus2.jpeg";
import aboutus3 from "../../assets/image/aboutus3.jpeg";
import scan from "../../assets/image/scan.png";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <>
      <div>
        <div className="containerAboutUs1">
          <p className="bigTextModern">MEET OUR FURNITURE DESIGNERS</p>
          <p>
            We cooperate with many designers from Denmark and other countries.
            As you might expect, they are all awards of the highest
            qualification. But perhaps more importantly, we have revealed a
            flair for sleek design: instant, precise thoughtful products that
            reflect modernity and enhance quality. Since these creative
            individuals span our collection, we have complete confidence in
            them. You can be sure that our furniture will decorate your home.
          </p>
        </div>
        <div className="containerAboutUs2">
          <div>
            <p className="bigTextModern">Usenkanova Binazir</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
          <div>
            <img className="imgAboutUs" src={aboutus1} />
          </div>
        </div>
        <div className="containerAboutUs3">
          <div>
            <img className="imgAboutUs" src={aboutus2} />
          </div>
          <div>
            <p className="bigTextModern">Saidalimov Muhamadamin</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
        </div>
        <div className="containerAboutUs4">
          <div>
            <p className="bigTextModern">Ysakova Ilika</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
          <div>
            <img className="imgAboutUs" src={aboutus3} />
          </div>
        </div>
        <div className="containerAboutUs5">
          <div>
            <img className="imgAboutUs" src={aboutus1} />
          </div>
          <div>
            <p className="bigTextModern">Almaz</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
        </div>
        <div className="containerAboutUs6">
          <div>
            <p className="bigTextModern">Umida</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
          <div>
            <img className="imgAboutUs" src={aboutus1} />
          </div>
        </div>
        <div className="containerAboutUs7">
          <div>
            <img className="imgAboutUs" src={aboutus1} />
          </div>
          <div>
            <p className="bigTextModern">Rahmanova Albina</p>
            <p>
              Morten Georgsen has a special talent for combining textures and
              colors. The result is incredibly beautiful things.
            </p>
          </div>
        </div>
      </div>
      <div className="containerAboutUs8">
        <div>
          <p>
            <ContactPageIcon />
            Mebel Valencia Spain sl
          </p>
          <p>
            <HomeIcon />
            VAT number: ES-B98803307
          </p>
          <p>
            <LocationOnIcon />
            Elías Tormo, 68B - Valencia Spain
          </p>
          <p>
            <PhoneIcon />
            Office +34963470406
          </p>
          <p>
            <PhoneIphoneIcon />
            Mobile +34665904143
          </p>
          <p>
            <AlternateEmailIcon />
            info@mebelvalencia.com
          </p>
          <p>
            <PublicIcon />
            www.mebelvalencia.com
          </p>
          <p>
            <PublicIcon />
            www.buyfurnitureinspain.com
          </p>
        </div>
        <div>
          <p>Scan QR Code and Contact us by Whatsapp!</p>
          <img className="imgAboutUs" src={scan} />
        </div>
        <div>
          <img className="imgAboutUs" src={map} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
