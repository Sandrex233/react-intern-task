const AddressDetails = ({ user }) => {
  return (
    <fieldset className="block border-2 border-gray-600 p-2 lg:ml-2 w-full lg:w-auto py-1">
      <legend className="block px-2 border-0 text-lg">Address</legend>
      <div>
        <strong>
          {user.company.name} {user.company.suffix}
        </strong>
      </div>
      <div>
        <span className="underline">City</span>: {user.address.city}
      </div>
      <div>
        <span className="underline">Country</span>: {user.address.country}
      </div>
      <div>
        <span className="underline">State</span>: {user.address.state}
      </div>
      <div>
        <span className="underline">Street Address</span>:{" "}
        {user.address.streetAddress}
      </div>
      <div>
        <span className="underline">ZIP</span>: {user.address.zipCode}
      </div>
    </fieldset>
  );
};

export default AddressDetails;
