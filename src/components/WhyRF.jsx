import React from 'react';
import { Fade } from "react-awesome-reveal";

const WhyRF = () => {
    return (
        <section className="py-10 px-4  w-11/12 mx-auto">
 
    <Fade>    <p className="text-2xl font-bold text-center mb-6">Why Choose Our Platform?</p>
</Fade>
    <div className="grid md:grid-cols-3 gap-6" >
      <div className="p-4 bg-base-200 rounded-xl shadow-xl">
        <h3 className="font-bold text-lg mb-2">Verified Listings</h3>
        <p>Every roommate listing is verified for authenticity and availability.</p>
      </div>
      <div className="p-4 bg-base-200 rounded-xl shadow-xl">
        <h3 className="font-bold text-lg mb-2">Easy Communication</h3>
        <p>Chat directly with the post owner and set up meetings easily.</p>
      </div>
      <div className="p-4 bg-base-200 rounded-xl shadow-xl">
        <h3 className="font-bold text-lg mb-2">Safe & Secure</h3>
        <p>We prioritize your safety with secure logins and user protections.</p>
      </div>
    </div>
  </section>
    );
};

export default WhyRF;