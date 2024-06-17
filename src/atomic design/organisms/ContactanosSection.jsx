import React from "react";
import RedesSociales from "../molecules/RedesSociales";
import ContactanosForm from "../molecules/ContactanosForm";

function ContactanosSection() {
  return (
    <div>
      <div>
        <RedesSociales />
      </div>
      <div>
        <ContactanosForm />
      </div>
    </div>
  );
}

export default ContactanosSection;
