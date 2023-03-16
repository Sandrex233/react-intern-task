import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="border border-solid border-gray-300">
      <img
        src={`${user.imageUrl}?v=${user.id}`}
        alt={user.name}
        className="w-full sm:h-72 lg:h-52 object-cover"
      />
      <div className="p-2 py-0">
        <h3 className="text-base font-bold">
          {user.prefix} {user.name} {user.lastName}
        </h3>
        <p>{user.title}</p>
      </div>
    </div>
  );
};

export default UserCard;
