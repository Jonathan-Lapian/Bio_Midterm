import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img
          src="https://via.placeholder.com/300"
          alt="Jonathan Lapian"
          style={styles.image}
        />
      </div>
      <div style={styles.textSection}>
        <h2>Hi There</h2>
        <h1>I'm Jonathan Lapian</h1>
        <p>Scholar that was from Universitas Klabat, Indonesia.</p>
        <div style={styles.stats}>
          <div>
            <h3>6+</h3>
            <p>Experience</p>
          </div>
          <div>
            <h3>10</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>2</h3>
            <p>Sertificate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "20px",
  },
  imageSection: {
    flex: 1,
    paddingRight: "10px",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "10px",
  },
  textSection: {
    flex: 2,
  },
  stats: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
};

export default Home;
