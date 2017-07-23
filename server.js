var PORT = process.env.PORT || 1962;

//Present friend-finder page
//When "Go to Survey" button is pushed
//  Present Survey page
//      Accept user input
//      When "Submit" button is pushed
//          Edit for name and pic link
//          if survey data OK
//              Generate survey score
//              For every stored survey score
//                  Determine if match
//              Write survey data
//          else
//              Present Error pop-up