const countries = ['ICELAND', 'MOROCCO', 'AUSTRIA'] //made an array of names of countries to be iterated over throughout the game

const round = 1; //Game starts on round 1

const triesNum = 0 //Each round, a user has 3 tries

 $('#openInstructions').on('click', () => { //event handeler where on click the instruction modal appears and disappears
        $('#instructions').show(500);
            $('#close').on('click', () => {
                $('#instructions').hide(400);
        })
})



for(let i = 0; i < countries.length; i++) { //wanted to create a for loop so country changes based on the round using array

    $('form').on('submit', (event) => { // when user submits form,
                event.preventDefault() //prevent default reload after submit

                    const userInput = $('input[type="text"]').val().toUpperCase(); // text submitted is turned uppercase and saved in variable



$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + userInput //using AJAX to connect to weatherstack API. userInput is added to URL in order to change information displayed on the site per round

}).then(
    (data) => {

            if(userInput === countries[i]) { //if userInput equals current country being iterated, they are correct and the following will happen...
                //issue with 'iceland' being correct and incorrect...???
                $('.status').append('<p>Your In ' + userInput + '</p>'); //append p tag to tell user where they are
                $('.weather').append(data.location.name).attr('id', 'cityName').append('<br/>'); // API is used to show weather city name for current country
                $('.weather').append(data.location.country).attr('id', 'country').append('<br/>'); // API shows country for current country being iterated
                $('.weather').append(data.current.temperature + ' Degrees').attr('id', 'temp').append('<br/>'); //API shows temp for current country being iterated
                $('.weather').append(data.current.weather_descriptions["0"]).attr('id', 'weather-descrip').append('<br/>');// API shows weather description
                $('.weather').append(data.current.weather_icons["0"]).attr('id', 'weather-icon').append('<br/>'); //need to make weather icon a img attr
                $('#win-modal').show(500); // modal for when user wins will pop up automatically
                    $('.modal-buttons').on('click', () => { //when user clicks close button
                        $('#win-modal').hide(400); // the win modal will hide
                        $('main').append('<button>NextRound</button>').attr('id', 'next_button'); // once the modal is closed a button is made to go to next round
                            $('#next_button').on('click', () => { // on click of next round button, the images shown will change to the next country imags in array
                                $('.pic1').css('background-image', 'url("imgs/' + countries[i+1] +'1.JPG")');
                                $('.pic2').css('background-image', 'url("imgs/' + countries[i+1] +'2.JPG")');
                                $('.pic3').css('background-image', 'url("imgs/' + countries[i+1] +'3.JPG")');
                                round++ //when next button is clicked user goes to next round
                                // if in round 1, restart process of form submit with 2nd element in countries array
                                // if in round 2, restart process of form submit with 3rd element in countries array
                        })

                });
        }else if (userInput !== countries[i]) { //After form is submitted, if userInput is not equal to current country being iterated, they are incorrect and the following will happen...

            // How do I make sure that correct lowercase country name is considers correct?

            $('.status').append('<p>Try Again</p>'); // append p tag to modal text box telling user to try again
            $('#modal-wrong').show(500); // modal for when user submits incorrect answer and its not that 3rd try, will pop up automatically
                $('.modal-buttons').on('click', () => { // when user clicks continue button
                    $('#modal-wrong').hide(400); //the wrong modal will hide
                        $('main').append('<button>NextRound</button>').attr('id', 'next_button'); // append button to take user to the next round

                                //How do i make it so the button is deleted after it is clicked? so that multiple buttons are not generated for each loop?

                            $('#next_button').on('click', () => { // when the next button is clicked it will change the img displayed to next country imgs
                                $('.pic1').css('background-image', 'url("imgs/' + countries[i+1] +'1.JPG")');
                                $('.pic2').css('background-image', 'url("imgs/' + countries[i+1] +'2.JPG")');
                                $('.pic3').css('background-image', 'url("imgs/' + countries[i+1] +'3.JPG")');
                                round++ //when next button is clicked, user goes to next round
                                // if in round 1, restart process of form submit with 2nd element in countries array
                                // if in round 2, restart process of form submit with 3rd element in countries array
                            })

                    });
            }

    },
    () => {
        console.log('bad request');
    }

)
    $(event.currentTarget).trigger('reset');
})
}
