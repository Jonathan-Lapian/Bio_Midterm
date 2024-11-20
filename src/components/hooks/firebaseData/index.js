import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

const FirebaseData = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "profile");

    onValue(profileRef, (snapshot) => {
      if (snapshot.exists()) {
        setProfile(snapshot.val());
      } else {
        console.error("No profile data found in database.");
      }
      setLoading(false);
    });
  }, []);

  return { profile, loading };
};

export default FirebaseData;
