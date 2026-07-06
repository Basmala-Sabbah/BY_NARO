import React from "react";
import {
  FaHeart,
  FaPalette,
  FaMedal,
  FaGift
} from "react-icons/fa";

export default function Why() {

  const features = [
    {
      icon: <FaHeart />,
      title: "صناعة يدوية",
      text: "كل قطعة تُطرّز بعناية وحب لتكون فريدة ومميزة."
    },
    {
      icon: <FaPalette />,
      title: "تصاميم مخصصة",
      text: "إمكانية تنفيذ الأسماء والتصاميم حسب طلبك."
    },
    {
      icon: <FaMedal />,
      title: "جودة عالية",
      text: "نستخدم خامات مختارة بعناية لتحافظ على جمالها."
    },
    {
      icon: <FaGift />,
      title: "هدية مثالية",
      text: "قطع مميزة تناسب جميع المناسبات والهدايا."
    }
  ];

  return (
    <section className="why">

      <div className="container">

        <div className="section-title">

          <span>لماذا BY NARO ؟</span>

          <div className="title-divider">

            <div className="line"></div>

            <span className="heart">♡</span>

            <div className="line"></div>

          </div>

          <h2>  تفاصيل تُصنع بحب وعناية </h2>

        </div>

        <div className="row g-4">

          {features.map((item, index) => (

            <div className="col-lg-3 col-md-6" key={index}>

              <div className="why-card">

                <div className="icon">

                  {item.icon}

                </div>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );

}