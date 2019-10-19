const countries = ['ICELAND', 'MOROCCO', 'AUSTRIA']; //made an array of names of countries to be iterated over throughout the game

let round = 1; //Game starts on round 1

let triesNum = 0; //Each round, a user has 3 tries

let i = 0;








$('#openInstructions').on('click', () => { //event handeler where on click the instruction modal appears and disappears
       $('#instructions').show(500);
           $('#close').on('click', () => {
               $('#instructions').hide(400);
       })
})


$('form').on('submit', (event) => { // when user submits form,
    event.preventDefault() //prevent default reload after submit

    triesNum++

    $('form').addClass('clicked');

    const userInput = $('input[type="text"]').val().toUpperCase(); // text submitted is turned uppercase and saved in variable




$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + userInput //using AJAX to connect to weatherstack API. userInput is added to URL in order to change information displayed on the site per round

}).then(
    (data) => {

        if($('form').hasClass('clicked')) {
            if(userInput === countries[i]) { //if userInput equals current country being iterated, they are correct and the following will happen...
                //issue with 'iceland' being correct and incorrect...???



                $('div#status-win').remove();
                $('div#weather-win').remove();
                const $div = $('<div>').attr('id', 'status-win').appendTo('#div-tobe-empty');
                $('iframe').attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyAsnO8_jZ89RFL-22mqlWwVkJsMTYtRRzY&q='" + userInput);
                const $div2 = $('<div>').attr('id','weather-win').appendTo('#div-tobe-empty');







                $('#status-win').append('<p>Your In ' + countries[i] + '</p>'); //append p tag to tell user where they are

                $('div#weather-win').append('<p>' + data.location.name + '</p>') // API is used to show weather city name for current country
                $('div#weather-win').children().eq(0).attr('id', 'cityName')


                $('div#weather-win').append('<p>' + data.location.country + '</p>') // API shows country for current country being iterated
                $('div#weather-win').children().eq(1).attr('id', 'country')


                $('div#weather-win').append('<p>' + data.current.temperature + ' Degrees</p>')  //API shows temp for current country being iterated
                $('div#weather-win').children().eq(2).attr('id', 'temp')


                $('div#weather-win').append('<p>' + data.current.weather_descriptions["0"] + '</p>');// API shows weather description
                $('div#weather-win').children().eq(3).attr('id', 'descrip')


                $('div#weather-win').append('<p>' + data.current.weather_icons["0"] + '</p>'); //need to make weather icon a img attr
                $('div#weather-win').children().eq(4).attr('id', 'weather-icon')

                $('#win-modal').show(500); // modal for when user wins will pop up automatically
                    $('.modal-buttons').on('click', () => { //when user clicks close button
                        $('#win-modal').hide(400); // the win modal will hide
                        $('main').append('<button>Next Round</button>');
                        $('button').attr('id', 'next_button'); // once the modal is closed a button is made to go to next round
                            $('button').on('click', (event) => { // on click of next round button, the images shown will change to the next country imags in array
                                i++ //increase index in array

                                $('.pic1').css('background-image', 'url("imgs/' + countries[i] +'1.JPG")');
                                $('.pic2').css('background-image', 'url("imgs/' + countries[i] +'2.JPG")');
                                $('.pic3').css('background-image', 'url("imgs/' + countries[i] +'3.JPG")');
                                round++ //when next button is clicked user goes to next round
                                triesNum = 0
                                $('form').removeClass('clicked');
                                $(event.currentTarget).remove();
                                $(this).remove();
                                // if in round 1, restart process of form submit with 2nd element in countries array
                                // if in round 2, restart process of form submit with 3rd element in countries array


                        })

                });
            } else if (userInput !== countries[i] && triesNum >= 3) {
                        userInput = countries[i]

                        $('div#status-force').remove();
                        $('div#weather-force').remove();
                        const $div4 = $('<div>').attr('id', 'status-force').appendTo('#div-tobe-empty2');
                        $('iframe').attr('src', "https://www.google.com/maps/embed/v1/place?key=AIzaSyAsnO8_jZ89RFL-22mqlWwVkJsMTYtRRzY&q='" + userInput);
                        const $div5 = $('<div>').attr('id','weather-force').appendTo('#div-tobe-empty2');



                        $('#status-force').append('<p>Your In ' + countries[i] + '. But I forgive you. Go to the next round!</p>'); //will need to delete everything in modal when next round begins so need to add empty method and add all modal contents here.

                        $$('div#weather-force').append('<p>' + data.location.name + '</p>') // API is used to show weather city name for current country
                        $('div#weather-force').children().eq(0).attr('id', 'cityName')


                        $('div#weather-force').append('<p>' + data.location.country + '</p>') // API shows country for current country being iterated
                        $('div#weather-force').children().eq(1).attr('id', 'country')


                        $('div#weather-force').append('<p>' + data.current.temperature + ' Degrees</p>')  //API shows temp for current country being iterated
                        $('div#weather-force').children().eq(2).attr('id', 'temp')


                        $('div#weather-force').append('<p>' + data.current.weather_descriptions["0"] + '</p>');// API shows weather description
                        $('div#weather-force').children().eq(3).attr('id', 'descrip')


                        $('div#weather-force').append('<p>' + data.current.weather_icons["0"] + '</p>'); //need to make weather icon a img attr
                        $('div#weather-force').children().eq(4).attr('id', 'weather-icon')

                        $('#modal-3-tries').show(500); // modal for when user wins will pop up automatically
                            $('.modal-buttons').on('click', () => { //when user clicks close button
                                $('#modal-3-tries').hide(400); // the win modal will hide
                                $('main').append('<button>NextRound</button>').attr('id', 'next_button'); // once the modal is closed a button is made to go to next round
                                    $('#next_button').on('click', () => { // on click of next round button, the images shown will change to the next country imags in array
                                        $('.pic1').css('background-image', 'url("imgs/' + countries[i+1] +'1.JPG")');
                                        $('.pic2').css('background-image', 'url("imgs/' + countries[i+1] +'2.JPG")');
                                        $('.pic3').css('background-image', 'url("imgs/' + countries[i+1] +'3.JPG")');
                                        round++ //when next button is clicked round number is increase and user goes to next round
                                        i++
                                        triesNum = 0 //reset tries to 0 for next round start
                                        $('#next_button').remove();
                                        // if in round 1, restart process of form submit with 2nd element in countries array
                                        // if in round 2, restart process of form submit with 3rd element in countries array
                                        $('form').removeClass('clicked');


                    })
            });

            } else if (userInput !== countries[i]) { //After form is submitted, if userInput is not equal to current country being iterated, they are incorrect and the following will happen...

            // How do I make sure that correct lowercase country name is considers correct?

            $('div#status-wrong').remove();
            const $div3 = $('<div>').attr('id', 'status-wrong').appendTo('#modal-textbox-wrong');


            $('div#status-wrong').append('<p>Try Again</p>'); // append p tag to modal text box telling user to try again
            $('#modal-wrong').show(500); // modal for when user submits incorrect answer and its not that 3rd try, will pop up automatically
            $('.modal-buttons').on('click', () => { // when user clicks continue button
                $('#modal-wrong').hide(400); //the wrong modal will hide, and user will have a change to submit form again
                    $('form').removeClass('clicked');
                        })

                }


        }else {

        }
$(event.currentTarget).trigger('reset');

},
    () => {
        console.log('bad request');
    });
})
