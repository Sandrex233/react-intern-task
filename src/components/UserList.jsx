import React, { useState, useEffect, useRef } from "react";
import { fetchUsers } from "../services/user";
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Loading from "./Loading";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const isIntersecting = useIntersectionObserver(loaderRef, { threshold: 1 });

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
    if (isIntersecting && !isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isIntersecting, isLoading]);

  return (
    <div className="container mx-auto max-w-7xl p-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {users.map((user, index) => (
          <Link to={`/user/${user.id}`} key={index}>
            <UserCard user={user} />
          </Link>
        ))}
      </div>
      <div ref={loaderRef} className="text-center">
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default UserList;
