import React from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import img1 from "../../assets/images/product1.jpg";
import img2 from "../../assets/images/product2.jpg";
import img3 from "../../assets/images/product3.jpg";

export default function ProductsPreview() {

    const products = [
        {
            image: img2,
            title: "فستان أطفال مطرز",
            price: "100 ₪"
        },
        {
            image: img3,
            title: "مصحف مطرز",
            price: "60 ₪"
        },
        {
            image: img1,
            title: "إطار تطريز",
            price: "60 ₪"
        }
    ];

    return (

        <section className="preview">

            <div className="container">

                {/* TITLE */}

                <div className="section-title">

                    <span>اكتشفوا ما نقدمه لكم</span>

                    <div className="title-divider">

                        <div className="line"></div>

                        <span className="heart-title">♡</span>

                        <div className="line"></div>

                    </div>

                    <h2>منتجات صنعت بحب</h2>

                    <p>
                        نقدم مجموعة من المنتجات المطرزة يدويًا بعناية،
                        بتصاميم أنيقة ولمسات مميزة تناسب جميع المناسبات.
                    </p>

                </div>

                {/* CARDS */}

                <div className="row g-4">

                    {products.map((item, index) => (

                        <div className="col-lg-4 col-md-6" key={index}>

                            <div className="product-card">

                                <div className="product-image">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                    />

                                </div>

                                <div className="product-content">

                                    <h4>{item.title}</h4>

                                    <div className="heart-divider">

                                        <div className="small-line"></div>

                                        <FiHeart />

                                        <div className="small-line"></div>

                                    </div>

                                    <h5>{item.price}</h5>

                                    <Link
                                        to="/contact"
                                        className="order-btn"
                                    >
                                        اطلب الآن
                                    </Link>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}