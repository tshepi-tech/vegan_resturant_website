import React from "react";

// DRY (Don't Repeat Yourself) -1
// You can create a InputField component to avoid the duplicate code
export default function ContactForm() {
  return (
    <form>
      <h2>Book a table</h2>
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
