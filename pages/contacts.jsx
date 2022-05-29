import React from "react";
import PageTitle from "../components/common/PageTitle";
import ContactForm from "../components/ContactForm";
import Head from "next/head";

function Contacts() {
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <Head>
        <title>Contacts</title>
        <meta
          name="description"
          content="Builders Ark was established in 2014 by an enthusiastic entrepreneur,
          George Bokaba. As an emerging contractor."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle description="Get in touch" title="Contacts" />
      <ContactForm />
    </div>
  );
}

export default Contacts;
