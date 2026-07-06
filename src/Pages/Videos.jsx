import React, { useState } from "react";

import feedback1 from "../assets/images/feedback1.jpg";
import feedback2 from "../assets/images/feedback2.jpg";
import feedback3 from "../assets/images/feedback3.jpg";
import feedback4 from "../assets/images/feedback4.jpg";
import feedback5 from "../assets/images/feedback5.jpg";
import feedback6 from "../assets/images/feedback6.jpg";
import feedback7 from "../assets/images/feedback7.jpg";
import feedback8 from "../assets/images/feedback8.jpg";
import feedback9 from "../assets/images/feedback9.jpg";
import feedback10 from "../assets/images/feedback10.jpg";


export default function Videos() {

  const [selectedImage, setSelectedImage] = useState(null);

  const feedbacks = [
    feedback1,
    feedback2,
    feedback3,
    feedback4,
    feedback5,
    feedback6,
    feedback7,
    feedback8,
    feedback9,
    feedback10
  ];

  return (
    <section className="feedback-page">

      <div className="container">

        <div className="feedback-title">

          <span>BY NARO</span>

          <h2>آراء الزبائن </h2>

          <p>
            نفخر بثقة زبائننا  وهذه بعض الصور التي شاركونا بها بعد استلام
            منتجاتهم.
          </p>

        </div>

        <div className="feedback-grid">

          {feedbacks.map((image, index) => (

            <div
              className="feedback-card"
              key={index}
              onClick={() => setSelectedImage(image)}
            >

              <img src={image} alt={`Feedback ${index + 1}`} />

            </div>

          ))}

        </div>

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <span className="close-btn">&times;</span>

          <img
            src={selectedImage}
            alt="Feedback"
            className="lightbox-image"
          />

        </div>

      )}

    </section>
  );
}