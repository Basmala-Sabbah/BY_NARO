import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="contact-page">

      <div className="container">

        {/* العنوان */}

        <div className="contact-title">

          <span>BY NARO</span>

          <h2>تواصل معنا</h2>

          <p>
            يسعدنا استقبال استفساراتكم وطلباتكم، يمكنكم التواصل معنا عبر
            وسائل التواصل التالية.
          </p>

        </div>

        {/* الكروت */}

        <div className="contact-grid">

          {/* Email */}

          <a
            href="mailto:bynaro@example.com"
            className="contact-card"
          >

            <FaEnvelope className="contact-icon" />

            <h3>البريد الإلكتروني</h3>

            <p>bynaro@example.com</p>

          </a>

          {/* Facebook */}

          <a
            href="https://www.facebook.com/share/1GakmuDxxy/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <FaFacebookF className="contact-icon" />

            <h3>Facebook</h3>

            <p>BY NARO</p>

          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/by_naro/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <FaInstagram className="contact-icon" />

            <h3>Instagram</h3>

            <p>@by_naro</p>

          </a>

        </div>

        {/* الزر */}

        <div className="contact-btn-box">

          <Link to="/products" className="contact-btn">

            تصفح المنتجات

          </Link>

        </div>

      </div>

    </section>
  );
}