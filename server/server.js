const express = require("express");
const sptoifyWebApi = require("spotify-web-api-node");
const app = express();

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000",
    clientId: "2e1cc0cc4e7746dca1239554b64c2dd4",
    clientSecret: "b51c3c25efd645eba795256c324dcb97",
  });

  sptoifyWebApi
    .authorizeCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refrestToken: data.body.refresh_token,
        expiresIn: data.body.expires_ins,
      });
    })
    .catch(() => {
      res.sendStatus(400);
    });
});
