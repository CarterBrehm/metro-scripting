$(document).ready(function () {
    $('#holder').hide();
    $('#get-employees').fadeIn();

    $('#get-employees').on("click", function () {
        $('#get-employees').fadeOut();
        $('#loader').fadeIn();

        $.ajax({
            type: "GET",
            url: "https://www.mccinfo.net/epsample/employees",
            success: function (response) {
                onAjaxComplete(response)
            }
        });

        function onAjaxComplete(response) {
            response = JSON.parse(response)
            for (const person of response) {
                
            }
        }
    });































});
