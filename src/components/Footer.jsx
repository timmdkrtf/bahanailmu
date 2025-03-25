import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo1 from "../assets/image/logo/Bahana Ilmu Favicon (N).png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6 pt-4 pb-3">
            <img src={logo1} alt="Halakah Logo" /><br/>
            <small>by PT Abdi Bangun Aksara</small>
            <div className="mt-3">
              <div className="" style={{padding: "5px 0"}}>
                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" className="text-white text-decoration-none">Jl. Aria Surialaga No. 83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <BsFillTelephoneFill  className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="tel:+622518632170" className="text-white text-decoration-none">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
              <BsWhatsapp className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="https://api.whatsapp.com/send?phone=6281288048052" className="text-white text-decoration-none">+62 812 8804 8052</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <BsFillEnvelopeFill className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="mailto:contact@halakah.co.id" className="text-white text-decoration-none">contact@bahanailmu.co.id</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
          <hr/>
            <p>© 2025 PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;