<script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
    ></script>

var wins = 0;
      var losses = 0;

      // create target number and crystal value variables
      var targetNumber;
      var numberOptions;

      // select random number between 19 and 120 as target
      targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

      // set each crystal´s value to a random number between 1 and 12
      numberOptions = [
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1),
        Math.floor(Math.random() * 12 + 1)
      ];

      //display target number
      $("#number-to-guess").text(targetNumber);

      // set score counter to 0
      var counter = 0;

      // Next we create a for loop to create crystals for every numberOption.
      for (var i = 0; i < numberOptions.length; i++) {
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr(
          "src",
          "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg"
        );

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Each crystal image (with all it classes and attributes) will get added to the page.
        $("#crystals").append(imageCrystal);
      }

      // Our click event applies to every single crystal on the page.
      $(".crystal-image").on("click", function() {
        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = $(this).attr("data-crystalvalue");
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // function to reset the target number, crystal values and score 
        function gameReset() {
          // select random number between 19 and 120 as target
          targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

          // set each crystal´s value to a random number between 1 and 12
          numberOptions = [
            Math.floor(Math.random() * 12 + 1),
            Math.floor(Math.random() * 12 + 1),
            Math.floor(Math.random() * 12 + 1),
            Math.floor(Math.random() * 12 + 1)
          ];

          //display target number
          $("#number-to-guess").text(targetNumber);

          // set score counter to 0
         counter = 0;
        }

        //alert win or lose 
        if (counter === targetNumber) {
          alert("You win!");
          wins++;
          gameReset();
        } else if (counter >= targetNumber) {
          alert("You lose!!");
          losses++;
          gameReset();
        }

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        $("#score").html(counter);

        $("#wins").html(wins);
        $("#losses").html(losses);
      });