import React from "react";

import aboutImg from "../../assets/images/By Naro.png";

import { FaRegHeart } from "react-icons/fa";
import { FiAward } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

export default function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <div className="section-title">

          <span>تعرفوا علينا</span>

          <h2>من نحن</h2>

          <div className="title-divider">
            <div className="line"></div>
            <FaRegHeart />
            <div className="line"></div>
          </div>

        </div>

        <div className="about-wrapper">

          {/* الصورة */}

          <div className="about-image">

            <img src={aboutImg} alt="BY NARO" />

          </div>

          {/* النص */}

          <div className="about-content">

            <h3>BY NARO</h3>

            <p>
              في <strong>BY NARO</strong> نحول الأفكار البسيطة إلى قطع تحمل
              قيمة وذكرى. نؤمن بأن لكل تفصيل جماله الخاص، لذلك نصمم ونطرز
              منتجاتنا بعناية وإتقان لنقدم لكم أعمالًا تجمع بين الجودة
              والأناقة واللمسة اليدوية المميزة. نسعى لأن تكون كل قطعة تعكس
              ذوقكم وتضيف لمسة فريدة تناسب مختلف المناسبات والهدايا.
            </p>

            <div className="about-features">

              <div className="feature-box">

                <FiAward />

                <h5>جودة عالية</h5>

              </div>

              <div className="feature-box">

                <FaRegHeart />

                <h5>تطريز يدوي</h5>

              </div>

              <div className="feature-box">

                <BsStars />

                <h5>تصاميم مميزة</h5>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}