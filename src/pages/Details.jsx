import React from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../components/Loading';
import { SlLike } from 'react-icons/sl';

const Details = () => {

  const listingDetails = useLoaderData()
  console.log('Fetched listing:', listingDetails);

  const {title, location, description, rent,roomType, lifestylePreferences, contactInfo, availability} = listingDetails
  
if(!listingDetails){
  return <Loading></Loading>
}

    return (
        <div className='w-11/12 mx-auto my-6'>
          <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-lg tracking-wide text-center font-bold lg:text-2xl">Listing Details</li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png"/></div>
    <div>
      <div className='text-sm md:text-lg'>"{title}"</div>
      <div className="text-xs uppercase font-semibold opacity-60 mt-2">Location: {location}</div>
    </div>
   
    
    <button className="btn btn-square btn-ghost">
      {/* <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg> */}
      <SlLike size={20} />
    </button>
  </li>


  
  <li className="list-row">
    <div className='space-y-4'>

       <p className="list-col-wrap text-sm"><span className='font-bold'>Description : </span> {description}</p>

    <p className="list-col-wrap text-sm"><span className='font-bold'>Rent : </span> {rent}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Room Type:</span> {roomType}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Lifestyle Preferences:</span> {lifestylePreferences}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Contact:</span> {contactInfo}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Availability:</span> {availability}</p>
    </div>
   
    
   
  </li>

  

  
</ul>
        </div>
    );
};

export default Details;


/**
 * "_id": "682ee23090b81685f0b63c11",
"title": "Looking for female student roommate",
"location": "Ctg",
"rent": "300",
"roomType": "Single",
"lifestylePreferences": "religious, nonsmoker",
"contactInfo": "01655556666",
"availability": "available",
"description": "Quite, religious"
 */