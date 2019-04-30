<!DOCTYPE html>
<head>
    <title>Assignment 9, Part 1</title>
</head>
<body>

<?php
    $weight = $_POST['weight'];
    $height = $_POST['height'];

    //formula for calculating BMI:
    //BMI = (Weight in Pounds / (Height in inches x Height in inches)) x 703
    //source: http://www.bmi-calculator.net/bmi-formula.php

    function calcBMI() {
        global $weight, $height;
        $BMI = $weight / ($height * $height) * 703;

        if($BMI < 18) {
            $evaluation = "Underweight";
        } else if($BMI > 30) {
            $evaluation = "Obese";
        } else {
            $evaluation = "Normal";
        }

        return "Your BMI is " . $BMI . ", which is considered " . $evaluation;
    }


?>

<h1>BMI Calculation</h1>
<p id="output-here"><?php print(calcBMI())?></p>
</body>