export default function ContactForm() {
  return (
    <div id="contact" className="contact-section">
      <div className="section-contact-title">
        <h1>Kontakt</h1>
        <div className="contact-flex-section">
          <div className="contact-info-container">
            <p className="contact-title">LET'S WORK TOGETHER!</p>
            <p className="contact-info">
              If you've got a project in mind, why not get in touch. Let me know
              if you have any interesting freelance work or projects. Big or
              small. You can contact me using the form, or by emailing
              mike.landy@gmail.com.
            </p>
            <img
              class="contact-image"
              src="./src/assets/public/images/undraw-contact.svg"
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
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
