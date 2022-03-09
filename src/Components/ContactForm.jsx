import React from "react";

export default function ContactForm() {
  return (
    <form>
      <h3>Book a table</h3>
      <label>
        Name
        <input type="text" placeholder="Tshepiso" />
      </label>
      <label>
        Email Address
        <input type="text" placeholder="jane@zmail.com" />
      </label>
      <label>
        Number of people
        <input type="number" placeholder="4" />
      </label>
    </form>
  );
}
