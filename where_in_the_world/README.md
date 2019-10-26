# WHERE IN THE WORLD ARE YOU? (Guessing Game)

## Project #1


My first project is a guessing game called 'Where in the World Are You?'. It combines my 3 passions: travel, my photography, and maps

***

### Objective:
The objective of the game is that the user suddenly wakes up and don't know where they are but only have 3 pictures and 3 clues to help them figure out their location to get to the next round until they get back home.

***

### The User Statements:
    * Can click on the instructions to get a modal explaining how to play the game.

    * Can hover over each picture to reveal clues about the location

    * Once the user has an idea of where they are, they can type out the country they are in and click submit

    * If the user is correct, a win modal will pop up automatically, telling the user that they are correct, showing a map of the location, and showing current weather in the location.

    * If the user is incorrect, a lose modal will pop up automatically, telling the user that they are incorrect and should try again

    * Users only have 3 chances to guess what country they are in. If it is the third try, a modal will pop up that they have lost the game and they can click the restart game button to reload page.

    * There are 3 rounds, so if the user guesses the 3 countries correct without running out of chances, a win modal will pop-up telling the user that they won the game and they can click restart game to reload page.

***

###APIs Used:
    * I used AJAX to pull the weatherstack API and show, city name, country, current temperature, current weather description, and weather_icon for the each country in a round, dynamically.

    * There were issues with CORS and HTTPS which made it very difficult to find a good API that would pull data locally and within github pages

    * I also used Google Maps API for their free Maps Embed API to be shown in the win modal in addition to weather which is very cool.

    * I realized that this is a client-side API in which you can not use AJAX, so because of that, I used weather in addition to this API.

***

 ###Approach Taken:
    *Originally I wanted to write a big for loop to iterate through all of the conditions that I had for the game.I realized that this approached was really working for me in a timely manner, so I decided to create conditional statements through JQuery to signal what modal needed to pop up for what, keep track of rounds and tries per round.

    *In addition, I use arrays and multidimensional arrays to dynamically change images, clues and locations for maps and weather.


 [Live Link To Project] (https://toriwat328.github.io/where_in_the_world/)

***

 ###Unsolved Issues:
    *Making my site 100% responsive on mobile. Some answers are not registering when I play on my phone. Add resize modals for mobile.

    *There has to be a more succinct way to code this using a for loop, I want to revisit this code to make it more DRY and include more elegant algorithm.

    *Formatting using CSS is not exactly how I want it.

    *Being able to swap in additional weather APIs just in case this one doesn't not work anymore for a future web safety issue.

    *Changing the API URL after it is defined within a certain round seems to be impossible to do so it would be interesting if there was a way to do this.

    *Change buttons to be inside of the modal, but this would require redesigning the modal which i did not have time to do.

    *Update 'next-round' button to be more visible on the page.
