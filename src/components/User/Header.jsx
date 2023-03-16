import React from "react";
import UserInformation from "./UserInformation";
import AddressDetails from "./AddressDetails";

const Header = ({ user }) => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center">
      {user && (
        <div className="flex flex-col md:flex-row justify-between flex-grow">
          <img
            src={user.imageUrl}
            alt={`${user.prefix} ${user.name} ${user.lastName}`}
            className="w-full md:w-24 h-24 mr-8"
          />
          <UserInformation user={user} />
          <AddressDetails user={user} />
        </div>
      )}
    </div>
  );
};

export default Header;
