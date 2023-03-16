const UserInformation = ({ user }) => {
  return (
    <fieldset className="border border-gray-600 p-4">
      <legend className="text-lg font-medium mb-2">Info</legend>
      <div>
        <strong>
          {user.prefix} {user.name} {user.lastName}
        </strong>
      </div>
      <div>
        <i>{user.title}</i>
      </div>
      {user.email && (
        <div>
          <span>Email</span>: {user.email}
        </div>
      )}
      {user.ip && (
        <div>
          <span>Ip Address</span>: {user.ip}
        </div>
      )}
      {user.jobArea && (
        <div>
          <span>Job Area</span>: {user.jobArea}
        </div>
      )}
      {user.jobType && (
        <div>
          <span>Job Type</span>: {user.jobType}
        </div>
      )}
    </fieldset>
  );
};

export default UserInformation;
