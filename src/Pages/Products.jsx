import React, { useState } from "react";
import products from "../data/products";

import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Products() {

  const [category, setCategory] = useState("الكل");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts =
    category === "الكل"
      ? products
      : products.filter((item) => item.category === category);

  return (

    <section className="products-page">

      <div className="container">

        {/* العنوان */}

        <div className="products-title">

          <span>BY NARO</span>

          <h2>منتجاتنا</h2>

          <p>
            اكتشفوا مجموعة من المنتجات المطرزة يدوياً بعناية وجودة عالية.
          </p>

        </div>

        {/* التصنيفات */}

        <div className="categories-buttons">

          <button
            className={category === "الكل" ? "active" : ""}
            onClick={() => setCategory("الكل")}
          >
            الكل
          </button>

          <button
            className={category === "ملابس" ? "active" : ""}
            onClick={() => setCategory("ملابس")}
          >
            ملابس
          </button>

          <button
            className={category === "مصاحف" ? "active" : ""}
            onClick={() => setCategory("مصاحف")}
          >
            مصاحف
          </button>

          <button
            className={category === "تعليقات" ? "active" : ""}
            onClick={() => setCategory("تعليقات")}
          >
            تعليقات / إطارات
          </button>

        </div>

        {/* المنتجات */}

        <div className="products-grid">

          {filteredProducts.map((item) => (

            <div className="product-card" key={item.id}>

              <div className="product-image">

                <img
                  src={item.image}
                  alt={item.name}
                  onClick={() => setSelectedImage(item.image)}
                />

              </div>

              <div className="product-content">

                <h4>{item.name}</h4>

                <div className="price-heart">

                  <span>{item.price}</span>

                  <FaRegHeart />

                </div>

                <Link to="/contact">

                  <button className="order-btn">

                    اطلب الآن

                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* نافذة تكبير الصورة */}

      {selectedImage && (

        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Product"
          />

        </div>

      )}

    </section>

  );

}