import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageTitle from "../../components/common/PageTitle";

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
      <PageTitle description="Project" title={title.replace(/_/g, " ")} />
    </div>
  );
}

export default Projects;
