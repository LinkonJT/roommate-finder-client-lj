import React from "react";
import { useLoaderData } from "react-router";
import ListingTable from "../components/ListingTable";

const BrowseListing = () => {
  const listings = useLoaderData();
  console.log(listings);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-xl font-bold my-4">
        Browse Our Listings
      </h1>
      <div className=" rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th >No.</th>
              <th>Title</th>
              <th>Rent</th>
              <th className="hidden md:block lg;block">Location</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {listings.map((listing, index) => (
              <tr key={listing._id}>
                <th >{index + 1}</th>
                <td>{listing.title}</td>
                <td>${listing.rentAmount}</td>
                <td className="hidden md:block">{listing.location}</td>
                <td>
                  <button className="btn btn-sm">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListing;
