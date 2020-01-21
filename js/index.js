  function getWorkoutData() {
    var xhr = new XMLHttpRequest();

    // xhr.open('GET', '/swimFeedJP.json?ver=1', true);
    // xhr.open('GET', '/KD Great Workout.json', true);
    xhr.open('GET', 'https://j-place.github.io/KD%20Great%20Workout.json', true);
    xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xhr.onload = function () {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.response);
        var workoutData = response;
        renderWorkouts(workoutData);
        console.log(workoutData);
        return;
      }
      console.log("Error retrieving swim information");
      return null;
    };
    xhr.send();
  }
  getWorkoutData();



// function loadJSON(callback) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'https://j-place.github.io/KD%20Great%20Workout.json', true);
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//             console.log(responseText);         
//           }
//     };
    
//     xobj.send(null);  
//  }
 
//  loadJSON();


 console.log("TEST");

// $.getJSON("KD Great Workout.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

//   var workoutData = require('./KD Great Workout.json');

//   renderWorkouts(workoutData);

  // Populate Workout Results Template
function renderWorkouts(workout) {
    console.log(workout.workouttitle);
    console.log(workout)
    var rawTemplate = document.getElementById("workoutResultsTemplate").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(workout)
    var wrapper = document.getElementById("workoutResultsWrapper");
    wrapper.innerHTML = ourGeneratedHTML;
  }