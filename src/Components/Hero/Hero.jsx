import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/Hero2.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <div className="container-fluid px-0">

        <div className="hero-wrapper">

          {/* الصورة */}
          <div className="hero-image">
            <img src={heroImage} alt="BY NARO" />
          </div>

          {/* المحتوى */}
          <div className="hero-content">

            <span className="hero-subtitle">
              مرحباً بكم في
            </span>

            <h1>
              BY <span>NARO</span>
            </h1>

            <p>
              نقدم تصاميم مطرزة يدوياً بعناية وحب، تشمل الملابس،
              الكوفرات، إطارات التطريز والهدايا المخصصة.
              كل قطعة تُنفذ بإتقان لتجمع بين الجودة،
              الإبداع واللمسة الشخصية.
            </p>

            <Link to="/products" className="hero-btn">
              تسوقي الآن
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}