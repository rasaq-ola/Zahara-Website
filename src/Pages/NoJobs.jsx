import React from "react";
import "./CSS/NoJobs.css";
import Job from '../Components/Assets/Job.png';

const NoJob = () => {
  return (
    <div className="no-job-container">
      <img src={Job} alt="No job openings" className="no-job-image" />
      <h2 className="no-job-title">No current openings</h2>
      <p className="no-job-description">
        We're not hiring right now, but check back soon for future opportunities.
      </p>
      <button className="back-button" onClick={() => window.location.href = "/"}>
        Back to homepage
      </button>
    </div>
  );
};

export default NoJob;
