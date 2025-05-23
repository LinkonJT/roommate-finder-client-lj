import React from 'react';


const HowItWorks = () => {
    return (
        <section className="py-10 px-4 bg-base-100 w-11/12 mx-auto">
    <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
    <ol className="p-4 bg-base-200 rounded-xl text-lg shadow-xl">
      <li><span className='font-semibold'>Sign Up / Log In:</span> Create your account to get started.</li>
      <li><span className='font-semibold'>Post or Browse Listings:</span> Add your own post or explore roommate listings from others.</li>
      <li><span className='font-semibold'>Like Posts:</span> Found something you like? Hit the "Like" button to save it.</li>
      <li><span className='font-semibold'>Contact & Book:</span> Get contact info and book appointments directly with the poster.</li>
    </ol>
  </section>
    );
};

export default HowItWorks;