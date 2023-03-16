const AddressDetails = ({ user }) => {
  return (
    <fieldset className="w-1/3 p-4 border border-gray-500">
      <legend className="text-lg font-medium mb-4">Address</legend>
      <div className="mb-2">
        <strong>
          {user.company.name} {user.company.suffix}
        </strong>
      </div>
      <div className="mb-2">
        <span>City</span>: {user.address.city}
      </div>
      <div className="mb-2">
        <span>Country</span>: {user.address.country}
      </div>
      <div className="mb-2">
        <span>State</span>: {user.address.state}
      </div>
      <div className="mb-2">
        <span>Street Address</span>: {user.address.streetAddress}
      </div>
      <div className="mb-2">
        <span>ZIP</span>: {user.address.zipCode}
      </div>
    </fieldset>
  );
};

export default AddressDetails;
