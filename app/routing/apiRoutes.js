var friendsData = require("../data/friends");

var closestMatch;
var valuesComparison;

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      for (i = 0; i < friendsData.length, i++){
          friendsData[i].scores
      }
      friendsData.push(req.body);

  });


};
