import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Loading from '../components/Loading';
import { SlLike } from 'react-icons/sl';

const Details = () => {

  const listingDetails = useLoaderData()
  console.log('Fetched listing:', listingDetails);


/******#######    CHELLENGE part like button ##########****************
 * (1)On the Details page, when the Like Button is clicked, the like count will increase. At the top of the Details page, there will be a text like this:
 "{likeCount} people interested in"

(2) By default, the Contact Number will not be shown on the Details page.
 Once the user clicks the Like Button, the Contact Number will appear below the button.
 */


const [likeCount, setLikeCount ] = useState(0)
const [liked, setLiked] = useState(false);
const [showContact, setShowContact] = useState(false)

const handleLike = ()=>{
     if (!liked) {
      setLikeCount(prev => prev + 1);
      setShowContact(true);
    } else {
      setLikeCount(prev => prev - 1);
      setShowContact(false);
    }
    setLiked(!liked);
}


 /******#########################******************************* */

  const {title, location, description, rent,roomType, lifestylePreferences, contactInfo, availability} = listingDetails
  
if(!listingDetails){
  return <Loading></Loading>
}

    return (
        <div className='w-11/12 mx-auto my-6'>
          <h2 className="text-center text-xl font-semibold mb-4">
        {likeCount} {likeCount === 1 ? 'person' : 'people'} interested in
      </h2>
          <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-lg tracking-wide text-center font-bold lg:text-2xl">Listing Details</li>
  
  <li className="list-row">
    <div><img className="size-10 rounded-box" src="https://cdn.pixabay.com/photo/2020/01/03/05/36/house-4737447_1280.png"/></div>
    <div>
      <div className='text-sm md:text-lg'>"{title}"</div>
      <div className="text-xs uppercase font-semibold opacity-60 mt-2">Location: {location}</div>
    </div>
   
    
    <button onClick={handleLike} className={`btn btn-square btn-ghost ${liked? 'text-red-500': ''}`}>
      <SlLike size={20} />
    </button>
  </li>


  
  <li className="list-row">
    <div className='space-y-4'>

       <p className="list-col-wrap text-sm"><span className='font-bold'>Description : </span> {description}</p>

    <p className="list-col-wrap text-sm"><span className='font-bold'>Rent : </span> {rent}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Room Type:</span> {roomType}</p>
    <p className="list-col-wrap text-sm"><span className='font-bold'>Lifestyle Preferences:</span> {lifestylePreferences}</p>

    <p className="list-col-wrap text-sm"><span className='font-bold'>Availability:</span> {availability}</p>
{
  showContact && (<p className="list-col-wrap text-sm"><span className='font-bold'>Contact:</span> {contactInfo}</p>)
}
        
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