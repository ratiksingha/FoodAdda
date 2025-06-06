import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchGithubData();
  }, []);

  async function fetchGithubData() {
    try {
      const response = await axios.get("https://api.github.com/users/ratiksingha");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center min-h-[40vh]">
        <div className="w-12 h-12 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const { name, bio, location, avatar_url, html_url } = userData;

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <img
          src={avatar_url}
          alt={name}
          className="w-28 h-28 rounded-full border-4 border-orange-100 shadow mb-4 transition-transform duration-300 hover:scale-110"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-sm text-gray-600 text-left w-full mb-2">{bio}</p>
        <p className="text-sm text-gray-400 w-full text-center mb-4">📍 {location}</p>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition"
        >
          Visit GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default About;