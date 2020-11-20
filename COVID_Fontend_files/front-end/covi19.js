// var dataSource = {
//   datasets: [
//    {
//       data: [],
//       backgroundColor:[],
// }
// ],

// labels:[ ]
// };

// function createChart(){
//  var ctx = document.getElementById('myChart').getContext('2d');
//  var myChart  = new Chart(ctx, {

//      type: 'pie',
//      data: dataSource
//  });
// }

// function getCurrentUpdates(){
// axios.get('http://localhost:4000/CurrentUpdates')
// .then(function(res){
// console.log(res);
// for(var i = 0; i < res.data.length; i++){
// dataSource.datasets[0].data[i] = res.data[i].covid;
// dataSource.labels[i] = res.data[i].title;
// dataSource.datasets[0].backgroundColor[i] = res.data[i].color;

// }
// createChart();

// });
// }

// getCurrentUpdates();

var websites = new Array(
	"http://www.hurriyet.com",
	"http://www.milliyet.com",
	"http://www.amazon.com"
);
var counter = 0;
var sTimeOut = setInterval(function () {
    var index = counter%(websites.length);

    $("#website_div").html($('<iframe src="' + websites[index] + '" width="500" height="500" border="0"/>' ));
    counter++;
}, 5000);

