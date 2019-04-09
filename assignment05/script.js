$(document).ready(function () {
    $('#holder').hide();
    $('#get-employees').fadeIn();
    $('#get-employees').click(function (e) {
    	console.log("button clicked"); 
        e.preventDefault();
        $(this).fadeOut(function () {
            $('#loader').fadeIn(function () {
                $.ajax({
                    url:'https://www.mccinfo.net/epsample/employees',
                }).done(onAjaxComplete);
            });
        });
    });
    function onAjaxComplete(employees) {
    	console.log("Ajax completed");
        var employees = $.parseJSON(employees);
        var s = "";
        if (Array.isArray(employees)) {
        	console.log("it is an array");
            for (var i = 0; i < employees.length; i++) {
            	console.log("running for loop with index: " + i);
                s += "<h3>" + employees[i].first_name + " " + employees[i].last_name + "</h3>";
                s += "<div>";
                s += "<img src='" + employees[i].image_filename + "' alt='employee image'/></p>";

                s += "<button class='get-info' id='" + employees[i].id + "'> More Info </button>";

                s += "</div>"

                $('#holder').html(s);
                console.log("set the html to s")
                $('#loader').fadeOut(function () {
                    console.log("fading out loader");
                    $('#holder').accordion({
                        minHeight: 300,
                        heightStyle: "content"
                    })
                    $('.get-info').click(function (e) { 
                        e.preventDefault();
                        console.log("info button clicked");
                        console.log(this.id);
                        var id = this.id;
                        e.stopImmediatePropagation()
                        $('#holder').fadeOut();
                        $('#loader').fadeIn(function () {
                            $.ajax({
                                url:'https://www.mccinfo.net/epsample/employees/' + id,
                            }).done(showEmployeeInfo);
                        });
                    });
                });
                function showEmployeeInfo(data) {
                	console.log("showing employee data");
                    parsedData = $.parseJSON(data);
                    console.log(parsedData);
                    var name = parsedData.first_name + " " + parsedData.last_name;
                    $('#dialog').attr('title', name);
                    var s = "";
                    s += "<img src='" + parsedData.image_filename + "'/>";
                    s += "<p>Hire Date: " + parsedData.hire_date + "</p>";
                    s += "<p>Salary: " + accounting.formatMoney(parsedData.annual_salary) + "</p>";
                    s += "<p>Department: " + parsedData.department.name + "</p>";
                    $('#dialog').html(s);
                    console.log("set html to " + s);
                    $('#loader').fadeOut();
                    $('#dialog').dialog({
                        close:function() {
                            console.log("closing");
                            $('#holder').fadeIn(function () {
                                $('#dialog').html('');
                            });
                        }
                    })
                }
                $('#holder').fadeIn();
            }
        }
    }
});