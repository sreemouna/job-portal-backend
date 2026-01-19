import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");

  // Fetch jobs
  useEffect(() => {
    fetch("http://localhost:8080/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  // Add job
  const addJob = async (e) => {
    e.preventDefault();

    const newJob = { title, company };

    await fetch("http://localhost:8080/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    setJobs([...jobs, newJob]);
    setTitle("");
    setCompany("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Job Portal</h1>

      <form onSubmit={addJob} style={{ marginBottom: "30px" }}>
        <input
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
          style={{ marginLeft: "10px" }}
        />
        <button style={{ marginLeft: "10px" }}>Add Job</button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> — {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



