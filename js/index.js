// function getWorkoutData() {
//     var xhr = new XMLHttpRequest();
//     // xhr.open('GET', '/swimFeedJP.json?ver=1', true);
//     // xhr.open('GET', '/KD Great Workout.json', true);
//     xhr.open('GET', 'https://j-place.github.io/KD%20Great%20Workout.json', true);
//     xhr.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             var response = JSON.parse(xhr.response);
//             var workoutData = response;
//             renderWorkouts(workoutData);
//             console.log(workoutData);
//             return;
//         }
//         console.log("Error retrieving swim information");
//         return null;
//     };
//     xhr.send();
// }
// // getWorkoutData();


//  console.log("TEST");


//  fetch("https://j-place.github.io/KD%20Great%20Workout.json").then(function(response){
//         return response.json();
//     }).then(function(data){
//         // console.log(data);
//         renderWorkouts(data);
//     });

// Populate Workout Results Template
// function renderWorkouts(workout) {
//     console.log(workout.workouttitle);
//     console.log(workout)
//     var rawTemplate = document.getElementById("workoutResultsTemplate").innerHTML;
//     var compiledTemplate = Handlebars.compile(rawTemplate);
//     var ourGeneratedHTML = compiledTemplate(workout)
//     var wrapper = document.getElementById("workoutResultsWrapper");
//     wrapper.innerHTML = ourGeneratedHTML;
// }



// var pdf = new jsPDF();
// var showUrl = document.querySelector('.show-url');
// var pageUrl = window.location.href;
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };
// console.log(window.location.href);
// console.log(showUrl.innerHTML);

$('#printWorkout').click(function () {
    window.print();
});


$(window).resize(function() {
    var width = $(window).width();
    if (width < 768){
        $(".list-control-search__content").css('display', 'none');
    } else {
        $(".list-control-search__content").css('display', 'flex');
    }
  });


$('.list-control-search-mobile__toggle').click(function() {
    var active = $(this).toggleClass('show-search').hasClass('show-search');
    $(".list-control-search__content").css('display', !active ? 'none' : 'flex');
  });