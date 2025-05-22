import React from 'react';

const ListingTable = () => {

const {title, location, rentAmount, availability} = listing

    return (
        

    <tbody>
      {/* row 1 */}
      <tr className='grid grid-cols-5 w-full'>
        <th>{index+1}</th>
        <td>{title}</td>
        <td>{rentAmount}</td>
        <td>{Location}</td>
        <td><button className='btn btn-sm'>See Details</button></td>
      </tr>
    </tbody>
  

    );
};

export default ListingTable;