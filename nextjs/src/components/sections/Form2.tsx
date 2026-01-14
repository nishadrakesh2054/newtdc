import Link from "next/link";

export default function Form2() {
  return (
    <>
      <div
        className="tf-widget-form-contact "
        style={{ marginBottom: "180px" }}
      >
        <div className="themeflat-container">
          <div className="tf-form-contact">
            <div className="row">
              <div className="col-md-6 pd-form">
                <div className="map-contact relative">
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4274419317535!2d85.32312107611213!3d27.642244128358538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17005434cb05%3A0xa7dc16fb1af01d1!2sThunderbolts%20Development%20Center!5e0!3m2!1sen!2snp!4v1724835834200!5m2!1sen!2snp"
              width="100%"
              height="575px"
              allowFullScreen
              loading="lazy"
            ></iframe>
                </div>
              </div>
              <div className="col-md-6 pd-form">
                <div className="form-contact background-black">
                  <div className="heading-register">
                    <h2 className="title-register">Contact Us</h2>
                  </div>
                  <div className="list-contact">
                    <div className="contact">
                      <span> Phone: </span>
                      <p className="address">+977 980 197 3967</p>
                    </div>
                    <div className="contact">
                      <span> Email: </span>
                      <p className="address">info@thunderbolts.com.np</p>
                    </div>
                  </div>
                  <ul className="social-media">
                    <li>
                      <Link href="/facebook.com">
                        <i className="icon-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/instagram.com">
                        <i className="icon-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/youtube.com">
                        <i className="icon-youtube" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/linkedin.com">
                        <i className="icon-linkedin2" />
                      </Link>
                    </li>
                  </ul>
                  <div className="form-register">
                    <form
                      id="registerform"
                      className="register-form"
                      noValidate
                    >
                      <fieldset className="name-container">
                        <input
                          type="text"
                          id="author"
                          placeholder="Your name*"
                          className="tb-my-input"
                          name="author"
                          tabIndex={1}
                          size={32}
                          aria-required="true"
                        />
                      </fieldset>
                      <fieldset className="email-container">
                        <input
                          type="text"
                          id="email"
                          placeholder="Your email*"
                          className="tb-my-input"
                          name="email"
                          tabIndex={2}
                          size={32}
                          aria-required="true"
                        />
                      </fieldset>
                      <fieldset className="telephone-container">
                        <input
                          type="text"
                          id="telephone"
                          placeholder="Telephone*"
                          className="tb-my-input"
                          name="telephone"
                          tabIndex={1}
                          size={32}
                          aria-required="true"
                        />
                      </fieldset>
                      <fieldset className="email-container">
                        <input
                          type="text"
                          id="subject"
                          placeholder="Subject*"
                          className="tb-my-input"
                          name="subject"
                          tabIndex={2}
                          size={32}
                          aria-required="true"
                        />
                      </fieldset>

                  <div className="form-submit">
                    <button type="submit" className="flat-button btn-submit-comment">
                      <span>Send Message</span>
                    </button>
                  </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
