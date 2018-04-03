var friendsData = require("../data/friends");

var closestMatch = 50;
var valuesComparison;
var currentComp = 0;
var bestMatch;

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      console.log(req.body);
    friendsData.push(req.body);
    var lastData = friendsData.length;
      for (i = 0; i < friendsData.length; i++){      
          
          for (j = 0; j < 10; j++){
              currentComp += Math.abs(friendsData[i].scores[j] - friendsData[lastData].scores[j]);
              console.log("ignition");
          }
          if (currentComp < closestMatch)
          {
              bestMatch = friendsData[i];
          }
          
      }

  });


};
