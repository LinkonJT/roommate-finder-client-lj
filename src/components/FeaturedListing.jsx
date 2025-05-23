import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import Loading from './Loading';
import { Fade } from "react-awesome-reveal";

const FeaturedListing = () => {

  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(()=>{
    fetch ('https://roommate-finder-server-eosin.vercel.app/featured')
    .then(res=>res.json())
    .then(data=>{
        setFeatured(data)
        setLoading(false); 
    }).catch(error=>{
      toast.error(error.message)
      setLoading(false);
    })
  },[])

if(loading){
  return <Loading></Loading>
}

    return (
       <section className="py-10 px-4  w-11/12 mx-auto">
        <Fade><h2 className="text-2xl md:text-sky-300xl font-bold text-center mb-6">Featured Roommates</h2></Fade>

        
      
      <div className="grid md:grid-cols-3 gap-6">
        {
        featured.map((item) => (
          <div key={item._id} className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="font-bold text-gray-500">"{item.title}"</h2>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Rent:</strong> ${item.rent}</p>
              <div  className="card-actions justify-end">
                <Link to={`/listing/${item._id}`}>
                  <button data-theme="abyss" className="btn btn-sm hover:bg-accent">See More</button>
                </Link>
              </div>
            </div>
          </div>
        ))
        }
      </div>
    </section>
    );
};

export default FeaturedListing;