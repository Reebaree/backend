require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;
  
const githubData = {
  "login": "Reebaree",
  "id": 123104240,
  "node_id": "U_kgDOB1Zr8A",
  "avatar_url": "https://avatars.githubusercontent.com/u/123104240?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Reebaree",
  "html_url": "https://github.com/Reebaree",
  "followers_url": "https://api.github.com/users/Reebaree/followers",
  "following_url": "https://api.github.com/users/Reebaree/following{/other_user}",
  "gists_url": "https://api.github.com/users/Reebaree/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Reebaree/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Reebaree/subscriptions",
  "organizations_url": "https://api.github.com/users/Reebaree/orgs",
  "repos_url": "https://api.github.com/users/Reebaree/repos",
  "events_url": "https://api.github.com/users/Reebaree/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Reebaree/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-01-19T16:56:05Z",
  "updated_at": "2024-07-14T10:26:31Z"
}
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("sanadotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>choona</h2>");
});

app.get('/github', (req, res) =>{
  res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
