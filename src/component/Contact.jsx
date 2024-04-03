import { React } from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="contact main-container">
          <div className="contact-left">
            <form
              className="contact-form"
              action="https://formspree.io/f/xkndqjya"
              method="POST"
            >
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button className="btn-submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contact-right">
            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 6h-3.135c-.385.641-.798 1.309-1.232 2h3.131l.5 1h-4.264l-.344.544-.289.456h.558l.858 2h-7.488l.858-2h.479l-.289-.456-.343-.544h-2.042l-1.011-1h2.42c-.435-.691-.848-1.359-1.232-2h-3.135l-4 8h24l-4-8zm-12.794 6h-3.97l1.764-3.528 1.516 1.528h1.549l-.859 2zm8.808-2h3.75l1 2h-3.892l-.858-2z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Address</h4>
                <p>Depok, West Java</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Phone</h4>
                <p>(+62) 812 1085 8813</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-item-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                </svg>
              </div>
              <div className="contact-item-detail">
                <h4>Email</h4>
                <p>mochammadibnuabbas@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Contact };
