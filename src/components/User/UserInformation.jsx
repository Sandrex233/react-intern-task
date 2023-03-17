const UserInformation = ({ user }) => {
  return (
    <fieldset className="block border-2 border-gray-600 p-4 ml-0 lg:ml-5 w-full py-1">
      <legend className="block px-2 border-0 text-lg font-meium">Info</legend>
      <div className="mb-2 flex flex-col">
        <strong>
          {user.prefix} {user.name} {user.lastName}
        </strong>
        <i>{user.title}</i>
      </div>
      {user.email && (
        <div>
          <span className="underline">Email</span>: {user.email}
        </div>
      )}
      {user.ip && (
        <div>
          <span className="underline">Ip Address</span>: {user.ip}
          <br />
          <span className="underline">Ip Address</span>: {user.ip}
        </div>
      )}
      {user.jobArea && (
        <div>
          <span className="underline">Job Area</span>: {user.jobArea}
        </div>
      )}
      {user.jobType && (
        <div>
          <span className="underline">Job Type</span>: {user.jobType}
        </div>
      )}
    </fieldset>
  );
};

export default UserInformation;
