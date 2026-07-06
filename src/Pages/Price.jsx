import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

export default function Price() {
  return (
    <section className="price-page">

      <div className="container">

        {/* العنوان */}

        <div className="price-title">

          <span>BY NARO</span>

          <h2>قائمة الأسعار</h2>

          <div className="title-divider">

            <div className="line"></div>

            <FaRegHeart />

            <div className="line"></div>

          </div>

          <p>
            الأسعار التالية تقريبية وقد تختلف حسب التصميم أو حجم التطريز.
          </p>

        </div>

        {/* الكروت */}

        <div className="price-grid">

          {/* الإطارات */}

          <div className="price-card">

            <div className="price-icon">🖼️</div>

            <h3>الإطارات</h3>

            <div className="price-item">
              <span>حجم صغير</span>
              <span>40 شيقل</span>
            </div>

            <div className="price-item">
              <span>حجم وسط</span>
              <span>60 شيقل</span>
            </div>

            <div className="price-item">
              <span>حجم كبير</span>
              <span>85 شيقل</span>
            </div>

          </div>

          {/* التعليقات */}

          <div className="price-card">

            <div className="price-icon">🤍</div>

            <h3>التعليقات</h3>

            <div className="price-item">
              <span>حجم صغير</span>
              <span>40 شيقل</span>
            </div>

            <div className="price-item">
              <span>حجم وسط</span>
              <span>60 شيقل</span>
            </div>

            <div className="price-item">
              <span>حجم كبير</span>
              <span>85 شيقل</span>
            </div>

          </div>

          {/* المصاحف */}

          <div className="price-card">

            <div className="price-icon">📖</div>

            <h3>المصاحف</h3>

            <div className="price-item">
              <span>حجم صغير</span>
              <span>40 شيقل</span>
            </div>

            <div className="price-item">
              <span>حجم وسط</span>
              <span>60 شيقل</span>
            </div>

          </div>

          {/* الملابس */}

          <div className="price-card">

            <div className="price-icon">👗</div>

            <h3>الملابس</h3>

            <div className="price-item">
              <span>فستان أطفال</span>
              <span>100 شيقل</span>
            </div>

            <div className="price-item">
              <span>بلوزة مطرزة</span>
              <span>50 شيقل</span>
            </div>

            <div className="price-item">
              <span>طقم ملابس بيبي كامل</span>
              <span>220 شيقل</span>
            </div>

          </div>

          {/* منتجات البيبي */}

          <div className="price-card">

            <div className="price-icon">🧸</div>

            <h3>منتجات البيبي</h3>

            <div className="price-item">
              <span>مشاطة خشب (للشعر الناعم والخشن)</span>
              <span>35 شيقل</span>
            </div>

            <div className="price-item">
              <span>لهاية مطرزة</span>
              <span>40 شيقل</span>
            </div>

          </div>

        </div>

        {/* الملاحظة */}

        <div className="price-note">

          <p>
             الأسعار المذكورة هي أسعار تقريبية، وقد تختلف حسب حجم التطريز
            أو تفاصيل التصميم.        
            بالنسبة لطقم ملابس البيبي، يمكن طلب قطعة معينة من الطقم بشكل
            منفصل ويختلف سعرها حسب القطعة المطلوبة.
          </p>

          <Link to="/contact">

            <button className="price-btn">

              اطلب الآن

            </button>

          </Link>

        </div>

      </div>

    </section>
  );
}