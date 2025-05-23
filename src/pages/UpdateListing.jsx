import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { useLoaderData } from 'react-router';
import { toast } from "react-toastify";

const UpdateListing = () => {

    const {user} = useContext(AuthContext)

const {_id, title, location, roomType, lifestylePreferences, contactInfo, availability,description,rent } = useLoaderData();


const handleUpdateCoffee=(e)=>{
    e.preventDefault()
const form = e.target;
const formData = new FormData(form)
const updatedListing = Object.fromEntries(formData.entries());
console.log(updatedListing);



/****send updated listing to Database */

fetch(`https://roommate-finder-server-rust.vercel.app/listings/${_id}`, {
  method: 'PUT',
  headers:{
    'content-type': 'application/json'
  },
  body: JSON.stringify(updatedListing )
})
.then(res=>res.json())
.then(data=>{
 if(data.modifiedCount){
  toast.success("Data updated Successfully")
 }
})


}



    return (
       <div className="card mx-auto p-4 md:p-8">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
        Update Roommate Listing
      </h2>
      <form onSubmit={handleUpdateCoffee} className="card">
        <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Title */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Listing Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder='e.g., "Looking for a roommate in NYC"'
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              placeholder="City, State/Country"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Rent Amount */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rent Amount ($)</span>
            </label>
            <input
              type="number"
              name="rent"
              defaultValue={rent}
              placeholder="e.g., 800"
              className="input input-bordered w-full"
              min="0" // Prevent negative values
              step="0.01" // Allow decimal for rent
              required
            />
          </div>

          {/* Room Type */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Room Type</span>
            </label>
            <select
              name="roomType"
              defaultValue={roomType}
              className="select select-bordered w-full"
              required>
              <option value="">Select Room Type</option>
              <option value="Single">Single Room</option>
              <option value="Shared">Shared Room</option>
              <option value="Private Bath">
                Private Room with Private Bath
              </option>
              <option value="Studio">Studio Apartment (if applicable)</option>
            </select>
          </div>

          {/* Lifestyle Preferences */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Lifestyle Preferences (Comma-separated)
              </span>
            </label>
            <input
              type="text"
              name="lifestylePreferences"
              defaultValue={lifestylePreferences}
              placeholder="e.g., Pets, Non-smoker, Night Owl, Quiet"
              className="input input-bordered w-full"
            />
            <small className="text-gray-500 mt-1">
              Separate with commas, e.g., "Pets, Non-smoker"
            </small>
          </div>

          {/* Contact Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Contact Information (Phone or Email)
              </span>
            </label>
            <input
              type="text"
              name="contactInfo"
              defaultValue={contactInfo}
              placeholder="Your phone number or email for contact"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Availability */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availability</span>
            </label>
            <select
              name="availability"
              defaultValue={availability}
              className="select select-bordered w-full"
              required>
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control md:col-span-2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Describe the room, apartment, and ideal roommate..."
              className="textarea textarea-bordered h-24 w-full"
              required></textarea>
          </div>

          {/* User Email (Read Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              value={user?.email || ''} // Populate with user's email
              readOnly // 
              // disabled // 
            />
          </div>

          {/* User Name (Read Only) */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              value={user?.displayName || ''} // Populate with user's display name
              readOnly
              // disabled 
            />
          </div>

          {/* Add Button */}
          <div className="form-control mt-6 md:col-span-2">
            <button
              type="submit"
              className="btn btn-neutral hover:bg-accent w-full">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
    );
};

export default UpdateListing;