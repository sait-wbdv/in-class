const { Octokit } = require("@octokit/core");
require('dotenv').config();

const octokit = new Octokit({ auth: process.env.access_token });

const ghReq = async function(endpoint) {
  const response = await octokit.request(`GET ${endpoint}`, {
    org: "octokit",
    type: "private",
  });
  console.log(response.data[0].files);
}

ghReq('/gists?per_page=1');