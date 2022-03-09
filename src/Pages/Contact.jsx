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
    </div>
  );
}
