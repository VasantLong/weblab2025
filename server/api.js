/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines routes for your server.
*/

const express = require("express");

// TODO (step5.1): add router
const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ message: "Example API endpoint" });
});
// TODO (step5.5): move api endpoints here

// TODO (step5.2): export router
module.exports = router;
