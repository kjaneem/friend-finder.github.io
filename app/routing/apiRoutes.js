// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var surveyData = require("../data/surveyData");
var matchData = require("../data/matchData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  //var match;
  
  app.get("/api/friends", function(req, res) {
    res.json(surveyData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a survey... this data is then sent to the server...
  // Then the server saves the data to the surveyData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    
    surveyData.push(req.body);
    res.json(true);
    
      //======  ADD THE COMPARE LOGIC HERE ====//
      var diff = 0;
      var saveLastName;
      var saveLastScore;
      var leastDiff = 5000;
      var thisGuysIndex;
      //var match;

      var saveScores = [];
      for (var i = 0; i < surveyData.length; i++)
      {
        var totalScore = 0;
        var scoreInt = 0;
        for (var j = 0; j < 10; j++)
        {
          scoreInt = parseInt(surveyData[i].scores[j]);
          totalScore = totalScore + scoreInt;
          saveScores[i] = totalScore;
          
        }
        console.log("friend#" + i + " score = " + totalScore);
      
        saveLastName = surveyData[i].name;
        saveLastScore = totalScore;
        console.log("Name = " + saveLastName + " Score = " + saveLastScore);
      }

      var loopCnt = saveScores.length - 1;
      for (var x = 0; x < loopCnt; x++)
      {
        diff = saveLastScore - saveScores[x];
        diff = Math.abs(diff);

        if (diff < leastDiff)
        {
          leastDiff = diff;
          thisGuysIndex = x;
        }
      }

      matchData.name = surveyData[thisGuysIndex].name;
      matchData.photo = surveyData[thisGuysIndex].photo;
      //console.log("Match = " + match);
      console.log("Match = " + matchData.name);
      console.log("Match image = " + matchData.photo);
      
      //======== END COMPARE LOGIC ====//
      
  });

//=====================START MATCH POST=============================
app.get("/api/match", function(req, res) {
//res.send(match);
res.json(matchData);
});
//======================END MATCH POST============================

};
