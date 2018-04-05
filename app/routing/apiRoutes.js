var friendsData = require("../data/friends");
var valuesComparison;



module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch;
        var closestMatch = 50;
        for (i = 0; i < friendsData.length; i++) {
            var currentComp = 0;
            for (j = 0; j < 10; j++) {
                //console.log("friendsData[i].scores[j] " + friendsData[i].scores[j])
                //console.log("req.body.scores[j] " + req.body.scores[j])
                currentComp += Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(req.body.scores[j]));
            }
            //updating the "closest match" if needed
            if (currentComp < closestMatch) {
                closestMatch = currentComp;
                bestMatch = friendsData[i];
            }

        }
        friendsData.push(req.body);
        //Showing the user their closest match
       // console.log(bestMatch);
        

    });


};
