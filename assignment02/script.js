$(document).ready(function () {

    var female1 = prompt("Please enter the name of a female (1/2):");
    var female2 = prompt("Please enter the name of a female (2/2):");
    var state = prompt("Please enter the name of a state:");
    var geo = prompt("Please enter the name of a geographic feature:");
    var male = prompt("Please enter the name of a male:");
    var occupation = prompt("Please enter the name of an occupation:");
    var noun1 = prompt("Please enter the name of a noun (1/5):");
    var noun2 = prompt("Please enter the name of a noun (2/5):");
    var noun3 = prompt("Please enter the name of a noun (3/5):");
    var noun4 = prompt("Please enter the name of a noun (4/5):");
    var noun5 = prompt("Please enter the name of a noun (5/5):");
    var color = prompt("Please enter the name of a color:");

    $('#female1').text(female1);
    $('#female1-2').text(female1);
    $('#female1-3').text(female1);
    $('#state').text(state);
    $('#geo').text(geo);
    $('#geo-2').text(geo);
    $('#occupation').text(occupation);
    $('#female2').text(female2);
    $('#female2-2').text(female2);
    $('#noun1').text(noun1);
    $('#noun2').text(noun2);
    $('#noun3').text(noun3);
    $('#noun4').text(noun4);
    $('#noun5').text(noun5);
    $('#color').text(color);
    $('#color-2').text(color);
    $('#color-3').text(color);
    $('#color-4').text(color);
    $('#male').text(male);
    $('#male-2').text(male);
});