import React from "react";
// import img from "../image/felix.png";
import img2 from "../image/phone-icon.png";
import img3 from "../image/mail-icon.png";
// import img4 from "../image/fluffykins.png";
// import img5 from "../image/mr-whiskerson.png";
// import img6 from "../image/pumpkin.png";

export default function contact(props) {
  return (
    <article className="contact-card">
      <img src={props.image} alt="Photo of Mr. Whiskerson" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={img2} alt="phone icon" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={img3} alt="mail icon" />
        <p>{props.email}</p>
      </div>
    </article>
  );
}
