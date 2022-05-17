import React from "react";
import PageTitle from "../components/common/PageTitle";
import ContactForm from "../components/ContactForm";

function Contacts() {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <PageTitle description="Get in touch" title="Contacts" />
      <ContactForm />
    </div>
  );
}

export default Contacts;
