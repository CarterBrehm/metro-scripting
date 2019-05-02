<!DOCTYPE html>
<head>
    <title>Assignment 9, Part 2</title>
</head>
<body>

    <?php
        //Task 3.1: Change these items to reflect
        //four of your favorite things
        $my_favorite_things = array (
            "Epic gaming",
            "Flying",
            "Fighting for the inclusion of male deer",
            "Drilling really low into the ground"
        );
    ?>

    <h1>My Favorite Things</h1>
        <!-- Task 3.2: Code to output things below -->
        <?php
            echo("<ul>");
            for($i = 0; $i < sizeof($my_favorite_things); $i++) {
                echo("<li>" . $my_favorite_things[$i] . "</li>");
            }
            echo("</ul>")
        ?>
    </body>

