import Link from 'next/link';

const darkBg = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #181825 0%, #232946 100%)",
  color: "#fff",
  fontFamily: "Arial, sans-serif",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "0 1rem"
};

const rainbowText = {
  background: "linear-gradient(90deg, #ff5f6d, #ffc371, #47e891, #30cfff, #845ec2, #ff5f6d)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: "bold"
};

const rainbowBar = {
  width: "100vw",
  height: "12px",
  background: "linear-gradient(90deg, #ff5f6d, #ffc371, #47e891, #30cfff, #845ec2, #ff5f6d)",
  marginBottom: "2rem"
};

const rainbowButton = {
  background: "linear-gradient(90deg, #ff5f6d, #ffc371, #47e891, #30cfff, #845ec2, #ff5f6d)",
  border: "none",
  color: "#fff",
  padding: "1rem 2rem",
  borderRadius: "10px",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(24, 24, 37, 0.2)",
  margin: "0.5rem",
  transition: "background 0.2s"
};

const cardStyle = {
  background: "rgba(35, 41, 70, 0.92)",
  borderRadius: "16px",
  padding: "2rem",
  marginBottom: "2rem",
  boxShadow: "0 6px 32px #222a4e55",
  maxWidth: "500px",
  textAlign: "center"
};

export default function Home() {
  return (
    <div style={darkBg}>
      <div style={rainbowBar}></div>
      <h1 style={{ fontSize: "2.7rem", margin: "0 0 2rem 0", ...rainbowText }}>
        Student Registry System 🌈
      </h1>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "1rem", color: "#fff" }}>
          Welcome!
        </h2>
        <p style={{ color: "#e0e0e0", fontSize: "1.2rem", marginBottom: "1.5rem" }}>
          <span style={rainbowText}>Our aim</span> is to provide an easy, secure, and inclusive way to manage student records.<br />
          Add, view, update, and delete students - all in one place.<br />
          <span style={{ color: "#ffc371" }}>Celebrate diversity. Support every learner.</span>
        </p>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem"
        }}>
          <Link href="/post-students"><button style={rainbowButton}>Add Student</button></Link>
          <Link href="/get-students"><button style={rainbowButton}>View Students</button></Link>
          <Link href="/update-students"><button style={rainbowButton}>Update Student</button></Link>
          <Link href="/delete-students"><button style={rainbowButton}>Delete Student</button></Link>
        </div>
      </div>
      <footer style={{
        marginTop: "auto",
        padding: "1rem",
        color: "#bcbcbc",
        fontSize: "1rem"
      }}>
        &copy; {new Date().getFullYear()} @kwawachi. Student Registry System. All rights reserved.
      </footer>
    </div>
  );
}