import React, { useEffect, useState } from "react";
import FirebaseData from "../../hooks/firebaseData";
import axios from "axios";

const Git = () => {
  const { profile } = FirebaseData(); // Keep your FirebaseData hook
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const gitLink = profile?.social?.github || ""; // Extract GitHub URL
        const username = gitLink.split("/").filter(Boolean).pop(); // Extract username
        if (!username) throw new Error("Invalid GitHub URL");

        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );

        setRepoCount(response.data.length); // Set repo count
      } catch (error) {
        console.error("Error fetching repository count:", error.message);
        setRepoCount(0); // Default to 0 on error
      }
    };

    if (profile?.social?.github) fetchRepoCount();
  }, [profile]);

  return repoCount; // Return just the raw number
};

export default Git;
