const db = require("./db");

const Query = {
  jobs: () => db.jobs.list(),
  job: (parentValue, args) => db.jobs.get(args.id),
  company: (parentValue, args) => db.companies.get(args.id),
};

const Job = {
  company: (job) => db.companies.get(job.companyId),
};

const Mutation = {
  createJob: (parentValue, { input }) => {
    console.log(input);
    const id = db.jobs.create(input);
    return db.jobs.get(id);
  },
};

const Company = {
  jobs: (company) =>
    db.jobs.list().filter((job) => job.companyId === company.id),
};

module.exports = { Query, Mutation, Company, Job };
