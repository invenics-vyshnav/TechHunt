import React, { useState } from "react";
import JobComp from "../components/JobComp";
import Fuse from "fuse.js";
import { useQuery } from "react-query";
import { apiGetAllJobs } from "../api/api";

const fuseConfig = {
  keys: [
		"role",
		"location",
    "company_name",
	]
}

const Jobs = () => {
  const [search, setSearch] = useState("")
  const { isLoading, error, data } = useQuery("jobs", apiGetAllJobs);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "An error has occurred: ";
  const fuse = new Fuse(data, fuseConfig);
  const jobs = search === "" ? data : fuse.search(search).map(result => result.item)
  console.log(jobs)
  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}></input>
      <button>Search</button>
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
  );
};

export default Jobs;
