import React from "react";
import { FiHeart } from "react-icons/fi";

import clothes from "../../assets/images/cloths.jpg";
import frames from "../../assets/images/frams.jpg";
import quran from "../../assets/images/quran.jpg";
import tags from "../../assets/images/tags.jpg";

const categories = [
  {
    title: "ملابس",
    image: clothes,
  },
  {
    title: "إطارات",
    image: frames,
  },
  {
    title: "مصاحف",
    image: quran,
  },
  {
    title: "تعليقات",
    image: tags,
  },
];

export default function Categories() {
  return (
    <section className="categories">

      <div className="container">

        <div className="section-title">

          <span>تسوق حسب الفئة</span>

          <div className="title-divider">

            <div className="line"></div>

            <FiHeart />

            <div className="line"></div>

          </div>

          <h2>اكتشفوا منتجاتنا المميزة</h2>

          <p>
            قطع مطرزة يدوياً بعناية لتناسب جميع المناسبات.
          </p>

        </div>

        <div className="row g-4">

          {categories.map((item, index) => (

            <div className="col-md-6" key={index}>

              <div className="category-card">

                <img src={item.image} alt={item.title} />

                <div className="overlay">

                  <h3>{item.title}</h3>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}