import React, { useState, useEffect, useRef } from "react";
import { fetchUsers } from "../services/user";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchNewUsers = async () => {
      setIsLoading(true);
      const newUsers = await fetchUsers(page, 20);
      if (page === 1) {
        setUsers(newUsers);
      } else {
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      }

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
    <div className="container mx-auto max-w-7xl p-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
      <div ref={loaderRef} className="text-center">
        {isLoading && (
          <div className="loader-container mx-auto">
            <div className="loader-bar loader-bar-1"></div>
            <div className="loader-bar loader-bar-2"></div>
            <div className="loader-bar loader-bar-3"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
