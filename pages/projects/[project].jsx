import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageTitle from "../../components/common/PageTitle";
import Head from "next/head";

function Projects() {
  const Router = useRouter();

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (!Router.isReady) return;

    setTitle(Router.query.project);
  }, [Router.isReady]);

  console.log(Router);
  return (
    <div className="max-w-7xl mx-auto mb-12">
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Builders Ark was established in 2014 by an enthusiastic entrepreneur,
          George Bokaba. As an emerging contractor."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle description="Project" title={title.replace(/_/g, " ")} />
    </div>
  );
}

export default Projects;
