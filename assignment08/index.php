<?php
    include "includes/header.php";

    $weight = 160;
    $age = 16;
    $fname = "Carter";
    $lname = "Brehm";

    function poundsToKg($pounds) {
        $kg = $pounds * (1 / 2.2);
        return $kg;
    }

?>
<body>
    <!-- Carter Brehm
        index.php
		INFO2340.PLA
		Jones
        April 23rd, 2019 -->
    <p>Good morning, ladies and gentlemen!</p>
    <p>My name is <?php print($fname)?> <?php print($lname)?>!</p>
    <p>I am <?php print($age)?> years old. I weigh <?php print($weight)?> pounds, which is <?php print(poundsToKg($weight))?> kg!</p>
</body>
<?php
    include "includes/footer.php";
?>


