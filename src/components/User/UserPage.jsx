import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchUser, fetchUserFriends } from "../../services/user";
import Header from "./Header";
import VisitedLinks from "./VisitedLinks";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import UserCard from "../UserCard";
import Loading from "../Loading";

const UserPage = ({ addToVisitedLinks, visitedLinks }) => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [friends, setFriends] = useState([]);
  const [friendPage, setFriendPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const isIntersecting = useIntersectionObserver(loaderRef, { threshold: 1 });

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUser(userId);
      setUser(userData);
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchNewFriends = async () => {
      setIsLoading(true);
      const newFriends = await fetchUserFriends(userId, friendPage, 20);
      if (friendPage === 1) {
        setFriends(newFriends);
      } else {
        setFriends((prevFriends) => [...prevFriends, ...newFriends]);
      }

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };

    fetchNewFriends();
  }, [userId, friendPage]);

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      setFriendPage((prevPage) => prevPage + 1);
    }
  }, [isIntersecting, isLoading]);

  return (
    <div className="container mx-auto max-w-6xl p-2 py-0 border-x border-gray-300">
      {user && <Header user={user} />}
      <VisitedLinks visitedLinks={visitedLinks} />
      <h2 className="font-bold text-2xl mb-8">Friends:</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {friends.map((friend) => (
          <Link
            to={`/user/${friend.id}`}
            key={friend.id}
            onClick={() =>
              addToVisitedLinks(
                `${friend.prefix} ${friend.name} ${friend.lastName}`,
                `/user/${friend.id}`
              )
            }
          >
            <UserCard user={friend} />
          </Link>
        ))}
      </div>
      <div ref={loaderRef} className="text-center">
        {isLoading && <Loading />}
      </div>
    </div>
  );
};

export default UserPage;
