import React from "react";
import UserInformation from "./UserInformation";
import AddressDetails from "./AddressDetails";

const Header = ({ user }) => {
  return (
    <>
      {user && (
        <div className="flex justify-between lg:flex-row flex-col items-center p-5">
          <img
            src={`${user.imageUrl}?v=${user.id}`}
            alt={user.name}
            className="h-52 w-full lg:w-auto"
          />
          <UserInformation user={user} />
          <AddressDetails user={user} />
        </div>
      )}
    </>
  );
};

export default Header;
