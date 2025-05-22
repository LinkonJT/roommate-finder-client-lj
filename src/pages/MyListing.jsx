import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';

const MyListing = () => {
      const { user, loading } = use(AuthContext);
      console.log("Current user email:", user?.email);
  const [myListings, setMyListings] = useState([]);

  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`http://localhost:3000/myListings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyListings(data));
    }
  }, [user, loading]);

  if (loading) {
    return <p>Loading...</p>; // or a spinner
  }



    return (
       <div className='w-11/12 mx-auto my-4'>
      <h2 className="text-2xl font-bold mb-4 text-center">My Listings</h2>
      <table className="table w-11/12">
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th className='hidden md:block lg:block'>Location</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myListings.map((listing, index) => (
            <tr key={listing._id}>
                <th >{index + 1}</th>
              <td>{listing.title}</td>
              <td className='hidden md:block lg:block'>{listing.location}</td>
              <td>${listing.rent}</td>
              <td>
                {/* <button className="btn btn-xs md:btn-sm btn-warning">Update</button>
                <button className="btn btn-xs md:btn-sm  btn-error ml-2">Delete</button> */}
                <div className="md:flex lg:flex gap-4">
  <button className="btn hover:bg-accent btn-xs join-item"><FaRegEdit size={20} /></button>
  <button className="btn hover:bg-accent btn-xs join-item"><MdDeleteOutline size={20} /></button>
  
</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyListing;

// <td>
//                 <button className="btn btn-sm btn-warning">Update</button>
//                 <button className="btn btn-sm btn-error ml-2">Delete</button>
//               </td>