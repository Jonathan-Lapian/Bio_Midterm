import React, { useEffect, useState } from "react";
import axios from "axios";
import FirebaseData from "../../hooks/firebaseData";

const Git = () => {
  const { profile } = FirebaseData();
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        // Extract GitHub username from the profile data
        const gitLink = profile?.social?.github || ""; // Adjust if `social` structure differs
        const username = gitLink.split("/").filter(Boolean).pop();

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

  return <span>{repoCount !== null ? repoCount : "Loading..."}</span>;
};

export default Git;
