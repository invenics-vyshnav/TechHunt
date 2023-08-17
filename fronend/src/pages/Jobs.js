import React, { useState } from "react";
import JobComp from "../components/JobComp";
import Fuse from "fuse.js";
import { useQuery } from "react-query";
import { apiGetAllJobs } from "../api/api";
import "./styles/jobs.css";

const fuseConfig = {
  keys: ["role", "location", "company_name"],
};

const Jobs = () => {
  const [search, setSearch] = useState("");
  const { isLoading, error, data } = useQuery("jobs", apiGetAllJobs);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "An error has occurred: ";
  const fuse = new Fuse(data, fuseConfig);
  const jobs =
    search === "" ? data : fuse.search(search).map((result) => result.item);
  console.log(jobs);
  return (
    <div className="job-all-root">
      <div className="job-all-header">
        <div className="job-all-heading">Explore Jobs </div>

        <div>
          <input
          className="job-search-inpfield"
            type="text"
            value={search}
            placeholder="Search role, title, or location.."
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="job-all-container">
        {jobs.map((job) => (
          <JobComp
            company_logo={job.company_logo}
            company_name={job.company_name}
            company_desc={job.company_desc}
            is_remote_available={job.is_remote_available}
            role={job.role}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
