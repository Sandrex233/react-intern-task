import React, { useState, useEffect, useRef } from "react";
import { fetchUsers } from "../services/user";

function UserList() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchNewUsers = async () => {
      setIsLoading(true);
      const newUsers = await fetchUsers(page, 20);
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchNewUsers();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.unobserve(loaderRef.current);
  }, [isLoading]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {users.map((user, index) => (
        <div key={index} className="border ">
          <img
            src={user.imageUrl}
            alt={user.name}
            className="w-full h-64 object-cover"
          />
          <div>
            <h3>
              {user.name} {user.lastName}
            </h3>
            <p>
              {user.prefix} {user.title}
            </p>
          </div>
        </div>
      ))}
      <div ref={loaderRef} className="text-center">
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default UserList;
