import React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo";
import { Link } from "../components/link";

const App = () => (
  <Layout>
    <SEO />
    <p>
      Sometimes folks that don't code need to change some code.  
      Githive.io is a tool for enabling technical and nontechnical teams work together in harmony.
    </p>
    <p>
      Modern organizations need to be able to configure systems quickly.  
      Often simple configuration changes require development resources and 
      out of band change requests.
    </p>
    <p>
      We believe there is a better way.  Developers describe what parts of their code
      can be changed by the business folks.  The business folks can then make small controlled
      changes that work with existing code development practices.
    </p>
    <Link to="/about">About</Link>
  </Layout>
);

export default App;
