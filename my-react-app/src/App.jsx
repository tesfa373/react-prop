import React from "react";
import "./index.css";
import Contact from "./component/contact";

import img1 from "./image/fluffykins.png";
import img2 from "./image/felix.png";
import img3 from "./image/pumpkin.png";
import img4 from "./image/mr-whiskerson.png";

function App() {
  return (
    <div className="contacts">
      <div>
        <Contact
          image={img4}
          name="Mr. Whiskerson"
          phone="(212) 555-1234"
          email="mr.whiskaz@catnap.meow"
        />
        <Contact
          image={img1}
          name="Fluffykins"
          phone="(212) 555-2345"
          email="fluff@me.com"
        />
      </div>
      <div>
        <Contact
          image={img2}
          name="Felix"
          phone="(212) 555-4567"
          email="thecat@hotmail.com"
        />
        <Contact
          image={img3}
          name="Pumpkin"
          phone="(0800) CAT KING"
          email="pumpkin@scrimba.com"
        />
      </div>
    </div>
  );
}

export default App;
