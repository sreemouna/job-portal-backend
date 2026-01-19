import { useEffect, useState } from "react";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Job Portal</h1>

      {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <strong>{job.title}</strong> – {job.company}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;


