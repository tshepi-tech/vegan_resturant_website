import React from "react";

//Project Files
import ContactForm from "../Components/ContactForm";

export default function Contact() {
  //properties
  const address = "37 Allendale road,Kavlinge. Sweden";
  const openingTimes = "Mon-Fri 10:00-22:00,Saturday 14:00-00:00";
  return (
    <div>
      <img src="" alt="picture of resturant owner using knife" />
      <ContactForm />
      <h3>{address}</h3>
      <h3>{openingTimes}</h3>
    </div>
  );
}
