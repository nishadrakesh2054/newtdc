"use client";

import Layout from "@/components/layout/Layout";
import Breadcrum from "@/components/elements/Breadcrum";
import Image from "next/image";

const TDCRegistration = () => {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div>
        <Breadcrum 
          title="TDC Registration"
          breadcrumbs={[
            { label: "Homepage", href: "/" },
            { label: "TDC Registration" }
          ]}
        />

        <div className="tf-contact-page main-content">
          <div className="themeflat-container">
            <div className="row ">
              <div className="col-md-12">
                <div 
                  className="registration-header wow fadeInUp animated" 
                  style={{ 
                    marginBottom: "40px", 
                    padding: "30px", 
                    backgroundColor: "#f8f9fa",
                    borderRadius: "8px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  <div className="row" style={{ alignItems: "center" }}>
                    <div className="col-md-3 col-lg-2">
                      <div style={{ 
                        textAlign: "center",
                        padding: "10px"
                      }}>
                        <Image
                          src="/images/tdclogo2.png"
                          alt="TDC Logo"
                          width={120}
                          height={120}
                          style={{ 
                            width: "100%", 
                            height: "auto", 
                            maxWidth: "120px",
                            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))"
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-md-9 col-lg-10">
                      <div style={{ paddingLeft: "20px" }}>
                        <h2 style={{ 
                          marginBottom: "12px", 
                          color: "var(--primary) !important", 
                          fontWeight: "700", 
                          fontSize: "32px",
                          lineHeight: "1.2",
                          letterSpacing: "0.5px"
                        }}>
                          THUNDERBOLTS DEVELOPMENT CENTER
                        </h2>
                       
                        <p className="post" style={{ 
                          textAlign: "left", 
                          margin: 0,
                        
                          color: "#333"
                        }}>
                          Thank you for choosing Thunderbolts Development Center (TDC) for your child&apos;s sports development.
                          <br /> Please fill out the form below to complete the registration process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-page-form">
                  <form
                    id="contactform-page"
                    className="contact-page form-submit"
                    action="/"
                    acceptCharset="utf-8"
                    noValidate
                  >
                    <h5 className="parallelogram-bg wow fadeInUp animated" style={{ marginBottom: "20px" }}>
                      Personal Information
                    </h5>

                    <div className="text-wrap clearfix">
                      <fieldset className="name-wrap">
                        <input
                          type="text"
                          id="fullName"
                          className="tb-my-input"
                          name="fullName"
                          placeholder="Full Name"
                          tabIndex={1}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="email-wrap">
                        <input
                          type="tel"
                          id="contactNo"
                          className="tb-my-input"
                          name="contactNo"
                          placeholder="Contact Number"
                          tabIndex={2}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="phone-wrap">
                        <input
                          type="email"
                          id="email"
                          className="tb-my-input"
                          name="email"
                          placeholder="Email Address"
                          tabIndex={3}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="age-wrap">
                        <input
                          type="text"
                          id="age"
                          className="tb-my-input"
                          name="age"
                          placeholder="Age"
                          tabIndex={4}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="name-wrap">
                        <input
                          type="text"
                          id="address"
                          className="tb-my-input"
                          name="address"
                          placeholder="Address"
                          tabIndex={5}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="email-wrap">
                        <input
                          type="date"
                          id="dob"
                          className="tb-my-input"
                          name="dob"
                          placeholder="Date of Birth"
                          tabIndex={6}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="phone-wrap">
                        <select
                          id="gender"
                          className="tb-my-input"
                          name="gender"
                          tabIndex={7}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select Gender ...</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </fieldset>

                      <fieldset className="age-wrap">
                        <input
                          type="text"
                          id="schoolName"
                          className="tb-my-input"
                          name="schoolName"
                          placeholder="School Name"
                          tabIndex={8}
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>

                    <h5 className="parallelogram-bg wow fadeInUp animated mt-4" style={{ marginTop: "30px", marginBottom: "20px" }}>
                      Parent/Guardian Information
                    </h5>

                    <div className="text-wrap clearfix">
                      <fieldset className="name-wrap">
                        <input
                          type="text"
                          id="parentName"
                          className="tb-my-input"
                          name="parentName"
                          placeholder="Parent Name"
                          tabIndex={9}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="email-wrap">
                        <input
                          type="email"
                          id="parentEmail"
                          className="tb-my-input"
                          name="parentEmail"
                          placeholder="Parent Email"
                          tabIndex={10}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="phone-wrap">
                        <input
                          type="tel"
                          id="parentContactNo"
                          className="tb-my-input"
                          name="parentContactNo"
                          placeholder="Parent Contact Number"
                          tabIndex={11}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="age-wrap">
                        <input
                          type="text"
                          id="parentAddress"
                          className="tb-my-input"
                          name="parentAddress"
                          placeholder="Parent Address"
                          tabIndex={12}
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>

                    <h5 className="parallelogram-bg wow fadeInUp animated mt-4" style={{ marginTop: "30px", marginBottom: "20px" }}>
                      Sports Selection
                    </h5>

                    <div className="text-wrap clearfix">
                      <fieldset className="name-wrap">
                        <select
                          id="sports"
                          className="tb-my-input"
                          name="sports"
                          tabIndex={13}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select a Sport ...</option>
                          <option value="football">Football</option>
                          <option value="basketball">Basketball</option>
                          <option value="cricket">Cricket</option>
                          <option value="futsal">Futsal</option>
                          <option value="swimming">Swimming</option>
                          <option value="tennis">Tennis</option>
                          <option value="tableTennis">Table Tennis</option>
                        </select>
                      </fieldset>

                      <fieldset className="email-wrap">
                        <select
                          id="time"
                          className="tb-my-input"
                          name="time"
                          tabIndex={14}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select Time ...</option>
                          <option value="morning">Morning</option>
                          <option value="afternoon">Afternoon</option>
                          <option value="evening">Evening</option>
                        </select>
                      </fieldset>

                      <fieldset className="phone-wrap">
                        <select
                          id="category"
                          className="tb-my-input"
                          name="category"
                          tabIndex={15}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select Category ...</option>
                          <option value="grassroots">Grassroots</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="senior">Senior</option>
                        </select>
                      </fieldset>
                    </div>

                    <h5 className="parallelogram-bg wow fadeInUp animated mt-4" style={{ marginTop: "30px", marginBottom: "20px" }}>
                      Emergency Contact
                    </h5>

                    <div className="text-wrap clearfix">
                      <fieldset className="name-wrap">
                        <input
                          type="text"
                          id="emergencyContactname"
                          className="tb-my-input"
                          name="emergencyContactname"
                          placeholder="Emergency Contact Name"
                          tabIndex={16}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="email-wrap">
                        <input
                          type="tel"
                          id="emergencyContactNumber"
                          className="tb-my-input"
                          name="emergencyContactNumber"
                          placeholder="Emergency Contact Number"
                          tabIndex={17}
                          aria-required="true"
                          required
                        />
                      </fieldset>
                    </div>

                    <h5 className="parallelogram-bg wow fadeInUp animated mt-4" style={{ marginTop: "30px", marginBottom: "20px" }}>
                      Medical Information
                    </h5>

                    <div className="text-wrap clearfix">
                    <fieldset className="name-wrap">
                        <input
                          type="text"
                          id="medicalCondition"
                          className="tb-my-input"
                          name="medicalCondition"
                          placeholder=" has medical condition?"
                          tabIndex={16}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                      <fieldset className="email-wrap">
                        <input
                          type="tel"
                          id="insuranceNumber"
                          className="tb-my-input"
                          name="insuranceNumber"
                          placeholder="Insurance Number"
                          tabIndex={17}
                          aria-required="true"
                          required
                        />
                      </fieldset>

                   
                    </div>

                    <h5 className="parallelogram-bg wow fadeInUp animated mt-4" style={{ marginTop: "30px", marginBottom: "20px" }}>
                      Additional Information
                    </h5>

                    <div className="text-wrap clearfix">
                      <fieldset className="name-wrap">
                        <select
                          id="transportation"
                          className="tb-my-input"
                          name="transportation"
                          tabIndex={22}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select Transportation ...</option>
                          <option value="self">Self</option>
                          <option value="bus">Bus</option>
                          <option value="other">Other</option>
                        </select>
                      </fieldset>

                      <fieldset className="email-wrap">
                        <select
                          id="paymentMethod"
                          className="tb-my-input"
                          name="paymentMethod"
                          tabIndex={23}
                          aria-required="true"
                          required
                          style={{
                            width: "100%",
                            padding: "15px 20px",
                            fontSize: "16px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                            backgroundColor: "#fff",
                          }}
                        >
                          <option value="">Select Payment Method ...</option>
                          <option value="fonepay">Fonepay</option>
                          <option value="esewa">eSewa</option>
                          <option value="bank">Bank Transfer</option>
                          <option value="cash">Cash</option>
                        </select>
                      </fieldset>
                    </div>

                    <fieldset className="message-wrap" style={{ marginTop: "30px" }}>
                      <label style={{ display: "flex", alignItems: "center", cursor: "pointer", fontSize: "14px" }}>
                        <input
                          type="checkbox"
                          name="agreement"
                          tabIndex={24}
                          aria-required="true"
                          required
                          style={{ marginRight: "10px", width: "18px", height: "18px", cursor: "pointer" }}
                        />
                        <span>
                          I acknowledge and accept the agreement terms for participation in Thunderbolts Cup programs.
                        </span>
                      </label>
                    </fieldset>

                    <button
                      name="submit"
                      type="submit"
                      id="comment-reply"
                      className="flat-button btn-submit-comment"
                      style={{ marginTop: "30px" }}
                    >
                      <span>Register Here</span>
                    </button>

                    <p className="payment-note wow fadeInUp animated" style={{ 
                      marginTop: "20px", 
                      fontSize: "14px", 
                      color: "#666",
                      fontStyle: "italic"
                    }}>
                      <i className="bi bi-exclamation-triangle-fill" style={{ marginRight: "8px" }}></i>
                      Please complete the registration form on a <u>laptop or desktop</u>. Once done, use your mobile device to scan the QR code and complete the payment.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TDCRegistration;
