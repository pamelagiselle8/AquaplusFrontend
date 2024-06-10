import React from "react";
import RedesSociales from "../molecules/RedesSociales";
import ContactanosForm from "../molecules/ContactanosForm";

function ContactanosSection() {
    return (
        <div style={{ position: "absolute", top: "280%", left: "2%", right: "2%", justifyContent: "left", display: "flex", gap: "20px" }}>
            <div style={{ width: "25%" }}>
                <RedesSociales />
            </div>
            <div style={{ width: "75%" }}>
                <ContactanosForm />
            </div>
        </div>
    );
}

export default ContactanosSection;
