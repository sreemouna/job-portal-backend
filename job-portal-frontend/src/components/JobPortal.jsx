import { useState } from "react";
import "./JobPortal.css";

export default function JobPortal() {
  const [search, setSearch] = useState("");

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "Remote",
      salary: "$120k - $160k",
      type: "Full-time",
      posted: "2 days ago",
      description:
        "We're looking for an experienced React developer to join our team."
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$130k - $180k",
      type: "Full-time",
      posted: "1 week ago",
      description:
        "Lead product strategy and collaborate with cross-functional teams."
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "New York, NY",
      salary: "$90k - $120k",
      type: "Contract",
      posted: "3 days ago",
      description:
        "Design intuitive and user-friendly experiences for clients."
    }
  ];

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-portal">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div>
            <h1 className="logo">SmartJobs</h1>
            <p className="tagline">
              Discover your next career opportunity with AI-powered matching
            </p>
          </div>
          <button className="post-btn">+ Post Job</button>
        </div>
      </header>

      {/* Main */}
      <main className="content">
        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search jobs by title, company, or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Jobs */}
        <div className="jobs-header">
          <h2>Available Positions</h2>
          <span>{filteredJobs.length} jobs found</span>
        </div>

        <div className="jobs-grid">
          {filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-top">
                <h3>{job.title}</h3>
                <span className={`badge ${job.type.toLowerCase()}`}>
                  {job.type}
                </span>
              </div>

              <p className="company">{job.company}</p>

              <div className="meta">
                <span>{job.location}</span>
                <span>{job.salary}</span>
              </div>

              <p className="desc">{job.description}</p>

              <div className="job-footer">
                <span className="posted">{job.posted}</span>
                <button className="apply-btn">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
