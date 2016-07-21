//document.getElementById("About").onClick = function() {myFunction()};

//function myFunction() {
//    document.getElementById("About").innerHTML = "YOU CLICKED ME!";
//}

$(document).ready(function()
{          
    $("li").hover(function(){
        $("#About").show()},
        function () {
        $("#About").hide()
    });
});