import React from "react";

//Project Files
import ContactForm from "../Components/ContactForm";
import InformationItem from "../Components/InformationItem";

import information from "../Data/information.json";

export default function Contact({ item }) {
  const details = information.map((item) => (
    <InformationItem key={item.id} item={item}></InformationItem>
  ));
  return (
    <div>
      {details}
      <ContactForm />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d925.6942758832063!2d12.996937270709612!3d55.6059166594164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3fe62a8514d%3A0xc793ec09d5850ac7!2sMJ&#39;s!5e0!3m2!1sen!2sse!4v1638376626373!5m2!1sen!2sse"></iframe>
    </div>
  );
}
