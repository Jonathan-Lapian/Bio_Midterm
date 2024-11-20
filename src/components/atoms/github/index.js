import React, { useEffect, useState } from "react";
import FirebaseData from "../../hooks/firebaseData";
import axios from "axios";

const Git = ({ link }) => {
  const { profile } = FirebaseData();
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const gitLink = profile?.social?.github || ""; // Adjust if `social` structure differs
        const username = gitLink.split("/").filter(Boolean).pop(); // Extract username from the link
        if (!username) {
          throw new Error("Invalid GitHub URL");
        }
        // Fetch repository data from GitHub API
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepoCount(response.data.length);
      } catch (error) {
        console.error("Error fetching repository count:", error.message);
        setRepoCount(0); // Default to 0 in case of an error
      }
    };
    if (profile?.social?.github) {
      fetchRepoCount();
    }
  }, [profile]);

  return <>{repoCount}</>; // Return the repo count as a number
};

export default Git;
