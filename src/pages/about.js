import React from "react";
import { Layout } from "../components";

export default () => (

  <Layout>
     <div style={{display:'flex',
    alignItems: 'center',
    flexDirection: 'column'}}>
  <h1 style={{marginTop:'20px',alignSelf:'baseline'}}>Contact Form</h1>

<div className="kontakt" style={{marginBottom:'100px'}}>
<form>
  <label htmlFor="fname">First Name</label>
  <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

  <label htmlFor="lname">Last Name</label>
  <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

  <label htmlFor="country">Country</label>
  <select id="country" name="country">
    <option value="australia">Australia</option>
    <option value="canada">Canada</option>
    <option value="usa">USA</option>
  </select>

  <label htmlFor="subject">Subject</label>
  <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'200px'}}></textarea>

  <input type="submit" value="Submit" onClick={() =>handleSubmit()}/>
</form>
</div>
</div>
  </Layout>
);

function handleSubmit () {
  alert("Submited");
};