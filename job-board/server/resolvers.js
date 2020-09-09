const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
  job: (parentValue, args) => db.jobs.get(args.id),
  company: (parentValue, args) => db.companies.get(args.id),
};

const Job = {
  company: (job) => db.companies.get(job.companyId),
};

const Company = {
  jobs: (company) =>
    db.jobs.list().filter((job) => job.companyId === company.id),
};

module.exports = { Query, Company, Job };
