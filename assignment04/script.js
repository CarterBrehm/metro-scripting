$(document).ready(function () {
    $('#action').click(function () {

        var letterGrade = $('#letter-grade').val().toUpperCase();
        var myFavoriteThings = [];
        myFavoriteThings.push("Eating");
        myFavoriteThings.push("Sleeping");
        myFavoriteThings.push("Breathing");
        myFavoriteThings.push("Living");

        //Write your decision structure between this comment...

        switch (letterGrade) {
            case "A":
                $('#decision-output').text("Grade range for A: 90% to 100%");
                break;
            case "B":
                $('#decision-output').text("Grade range for B: 80% to 90%");
                break;
            case "C":
                $('#decision-output').text("Grade range for C: 70% to 80%");
                break;
            case "D":
                $('#decision-output').text("Grade range for D: 60% to 70%");
                break;
            case "F":
                $('#decision-output').text("Grade range for F: Less than 60%");
                break;
            default:
                $('#decision-output').text("Error! Invalid value entered");
        }

        //...and this comment

        //Now, write a for, while, OR do-while loop between this comment...

        for (let item of myFavoriteThings) {
            $('#loop-output').append(item + "<br>");
        }

        //...and this comment

        //Use the jQuery .each() method to loop through
        //the myFavoriteThings array between this comment...

        $.each(myFavoriteThings, function (index, item) {
            $('#each-output').append(item + "<br>");
        });

        //...and this comment

    });
});