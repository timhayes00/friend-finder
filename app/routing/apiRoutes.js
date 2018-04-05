var friendsData = require("../data/friends");
var valuesComparison;



module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      
    console.log(req.body);
    friendsData.push(req.body);
    var searchArray = friendsData.length -1;
      for (i = 0; i < searchArray; i++){
          var bestMatch;
          var closestMatch = 50;
          var currentComp = 0;
          console.log("iterating through the 'i' loop")
          for (j = 0; j < 10; j++){
              //console.log("friendsData[i].scores[j] " + friendsData[i].scores[j])
              //console.log("friendsData[lastData].scores[j] " + friendsData[recentFriend].scores[j])
              currentComp += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
          }
          console.log("current value of 'currentComp' = " + currentComp)
          if (currentComp < closestMatch)
          {
              bestMatch = friendsData[i];
          }
          
      }
    console.log(bestMatch);

  });


};
