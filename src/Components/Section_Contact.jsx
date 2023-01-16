import { Fade, Slide } from "react-awesome-reveal";
import { FaLaptopCode} from "react-icons/fa";
export default function ContactForm() {
  return (
    <div id="contact" className="contact-section">
          <div className="section-bio-title">
     
     <h1><FaLaptopCode  size={35}/>  {" "}   Hör av <h1>Dig</h1></h1>
     
   </div>
      <div className="section-contact-title">
        {/* <h1>Kontakt</h1> */}
        <div className="contact-flex-section">
          <div className="contact-info-container">
          <Fade triggerOnce="true" cascade direction="up" fraction={0.8}>
            <p className="contact-title">Ta gärna kontakt!</p>
            <p className="contact-info">
              Om du har ett projekt i åtanke, varför inte ta kontakt. Låt mig
              veta om du har något intressant frilansarbete eller projekt. Stora
              eller små. Du kan kontakta mig via formuläret eller genom att
              mejla mike.landy@gmail.com.
            </p>
            </Fade>
            <img
              class="contact-image"
              src="https://raw.githubusercontent.com/mikelandy86/website2.0/bed9820de29c7a82891e8431f98d41c97fcc09ea/src/assets/public/images/undraw-contact.svg"
            />
          </div>
          <div className="contact-input-container">
            <form>
              <div className="form-outline">
                <input type="text" placeholder="Name" class="form-control" />
              </div>

              <div className="form-outline">
                <input type="text" placeholder="Subject" class="form-control" />
              </div>

              <div className="form-outline">
                <input
                  type="email"
                  id="form4Example2"
                  placeholder="Email address"
                  className="form-control"
                />
              </div>

              <div className="form-outline mb-4">
                <textarea
                  className="form-control-message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>

              <button type="submit" className="contact-btn">
                Skicka
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
