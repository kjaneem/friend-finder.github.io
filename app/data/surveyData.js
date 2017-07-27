// ===============================================================================
// DATA
// Below data will hold all of the surveys.
// ===============================================================================

var surveyArray = [
  {
  "name":"Yosemite Sam",
  "photo":"http://yosemitesamquotes.com/wp-content/uploads/Yosemite-Sam-Quotes-300x281.png",
  "scores":[
      4,
      1,
      3,
      4,
      5,
      1,
      1,
      2,
      4,
      1
          ]
  },
  {
  "name":"Bugs Bunny",
  "photo":"https://images7.alphacoders.com/447/thumb-1920-447631.jpg",
  "scores":[
      4,
      4,
      3,
      4,
      5,
      2,
      2,
      2,
      2,
      1
           ]
  },
    {
  "name":"Daffy Duck",
  "photo":"http://vignette1.wikia.nocookie.net/looneytunes/images/0/05/Daffy-duck_00402319.png",
  "scores":[
      5,
      1,
      4,
      1,
      4,
      1,
      2,
      1,
      1,
      1
          ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = surveyArray;