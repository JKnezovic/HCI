import React from "react";
import { Layout } from "../components";

export default () => {
  return (
    <Layout>
      <iframe style={{marginTop:'40px', marginBottom:'40px',width: '80%'}} title="Karta" src="https://www.google.com/maps/d/embed?mid=19CW7Pj8k26iVg5I4gKWFamIq9eLK6fOA" width="1000" height="600" frameborder="0"  allowfullscreen></iframe>

    </Layout>
  );
};
