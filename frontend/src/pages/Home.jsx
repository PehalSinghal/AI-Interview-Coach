import { useState } from "react";

function Home() {
  const [selected, setSelected] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial",
      }}
    >
      <h1>AI Interview Coach 🚀</h1>

      <h3>Practice AI-powered technical interviews</h3>

      <br />

      <h2>Select Interview Type</h2>

      <div style={{ fontSize: "20px" }}>
        <p>
          <input
            type="radio"
            name="interview"
            value="Machine Learning"
            onChange={(e) => setSelected(e.target.value)}
          />
          Machine Learning
        </p>

        <p>
          <input
            type="radio"
            name="interview"
            value="DSA"
            onChange={(e) => setSelected(e.target.value)}
          />
          Data Structures & Algorithms
        </p>

        <p>
          <input
            type="radio"
            name="interview"
            value="HR"
            onChange={(e) => setSelected(e.target.value)}
          />
          HR Interview
        </p>

        <p>
          <input
            type="radio"
            name="interview"
            value="AI Engineer"
            onChange={(e) => setSelected(e.target.value)}
          />
          AI Engineer
        </p>
      </div>

      <br />

      <button
        style={{
          padding: "12px 30px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Start Interview
      </button>

      <br />
      <br />

      <h2>{selected}</h2>
    </div>
  );
}

export default Home;