import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u10",
      name: "Max Well",
      image: "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
