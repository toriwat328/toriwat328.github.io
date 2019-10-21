const countries = ['ICELAND', 'MOROCCO', 'AUSTRIA']; //made an array of names of countries to be iterated over throughout the game

const facts = [
                ['Known for their cute horses', 'There are no mosquitos here', '80% of the country is uninhabited'],
                ['The Sahara Desert is within this country', 'Their currency is the Dirham', 'Yves Saint Laurent had a home here'],
                ['This country has one of the oldest national flags in the world', 'The first postcards were used here', 'The hills are alive here']
            ];

let round = 1; //Game starts on round 1

let triesNum = 3; //Each round, a user has 3 tries

let i = 0;



$('#openInstructions').on('click', () => { //event handeler where on click the instruction modal appears and disappears
       $('#instructions').show(500);
           $('#close').on('click', () => {
               $('#instructions').hide(400);
       })
})

$('main').prepend('<h3>Round ' + round +'</h3>')


$('#overlay-contain1').append('<p>' + facts[0][0] + '</p>')
$('#overlay-contain2').append('<p>' + facts[0][1] + '</p>')
$('#overlay-contain3').append('<p>' + facts[0][2] + '</p>')







$('form').on('submit', (event) => { // when user submits form,
    event.preventDefault() //prevent default reload after submit
triesNum--;

// $('main').children('p').remove();
// $('main').prepend('<p>Round ' + round +'</p>')






    $('form').addClass('clicked');

    // if(userInput !== countries[i] && triesNum === 0) {
    //     var userInput = countries[i]
    //
    // } else {
        const userInput = $('input[type="text"]').val().toUpperCase(); // text submitted is turned uppercase and saved in variable
    // }


var url = 'https://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + userInput


$.ajax({
    url: url //using AJAX to connect to weatherstack API. userInput is added to URL in order to change information displayed on the site per round

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







                $('#status-win').append("<p>You're In " + countries[i] + "</p>"); //append p tag to tell user where they are

                $('div#weather-win').append('<p>' + data.location.name + '</p>') // API is used to show weather city name for current country
                $('div#weather-win').children().eq(0).attr('id', 'cityName')


                $('div#weather-win').append('<p>' + data.location.country + '</p>') // API shows country for current country being iterated
                $('div#weather-win').children().eq(1).attr('id', 'country')


                $('div#weather-win').append('<p>' + data.current.temperature + ' Degrees</p>')  //API shows temp for current country being iterated
                $('div#weather-win').children().eq(2).attr('id', 'temp')


                $('div#weather-win').append('<p>' + data.current.weather_descriptions["0"] + '</p>');// API shows weather description
                $('div#weather-win').children().eq(3).attr('id', 'descrip')

                $('div#weather-win').append('<img>')
                $('div#weather-win').children('img').attr('src',  data.current.weather_icons["0"]).attr('id', 'weather-icon'); //need to make weather icon a img attr
                $('img#weather-icon').css('height', '50px').css('margin-left', '50px')


                $('#win-modal').show(500); // modal for when user wins will pop up automatically
                    $('#close1').on('click', () => { //when user clicks close button
                        $('#win-modal').hide(400); // the win modal will hide
                        if(round === 3) {
                                $('#you-won-modal').show(500);
                                $('#close4').on('click', () => {
                                    $('.you-won-modal').hide(400);
                                    location.reload();
                            })
                        }else {

                        }

                        $('button#next_button').remove();
                        $('main').append('<button>Next Round</button>');
                        $('main').children('button').attr('id', 'next_button'); // once the modal is closed a button is made to go to next round
                            $('button#next_button').on('click', (event) => { // on click of next round button, the images shown will change to the next country imags in array
                                i++ //increase index in array



                                $('.pic1').css('background-image', 'url("imgs/' + countries[i] +'1.JPG")');

                                $('#overlay-contain1').children('p').remove();
                                $('#overlay-contain1').append('<p>' + facts[i][0] + '</p>')

                                $('.pic2').css('background-image', 'url("imgs/' + countries[i] +'2.JPG")');

                                $('#overlay-contain2').children('p').remove();
                                $('#overlay-contain2').append('<p>' + facts[i][1] + '</p>')

                                $('.pic3').css('background-image', 'url("imgs/' + countries[i] +'3.JPG")');

                                $('#overlay-contain3').children('p').remove();
                                $('#overlay-contain3').append('<p>' + facts[i][2] + '</p>')

                                round+=1;//when next button is clicked user goes to next round
                                console.log(round);
                                $('main').children('h3').remove();
                                $('main').prepend('<h3>Round ' + round +'</h3>')
                                triesNum = 3;
                                $('form').removeClass('clicked');
                                $(event.currentTarget).remove();
                                $(this).remove();



                        });

                });
            } else if (userInput !== countries[i] && triesNum === 0) {

                url = 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + countries[i]
                console.log(url)

                $('div#status-force').remove();

                const $div4 = $('<div>').attr('id', 'status-force').appendTo('#div-tobe-empty2');



                $('#status-force').append('<p>Your In ' + countries[i] + '.</br> Sorry you lost the game!</br> I guess you will be stuck in '+ countries[i] + ' FOREVER! *evil laugh* </br> Just kidding! To restart game, click the restart button below.</p>'); //will need to delete everything in modal when next round begins so need to add empty method and add all modal contents here.


                $('#modal-3-tries').show(500); // modal for when user wins will pop up automatically
                    $('#close2').on('click', () => { //when user clicks close button
                        $('#modal-3-tries').hide(400); // the win modal will hide
                                    location.reload();
                            })

                } else if (userInput !== countries[i]) { //After form is submitted, if userInput is not equal to current country being iterated, they are incorrect and the following will happen...

                            // How do I make sure that correct lowercase country name is considers correct?


                            $('div#status-wrong').remove();
                            const $div3 = $('<div>').attr('id', 'status-wrong').appendTo('#modal-textbox-wrong');


                            $('div#status-wrong').append('<p>Try Again.</br> Tries Left: ' + triesNum + '</p>'); // append p tag to modal text box telling user to try again
                            $('#modal-wrong').show(500); // modal for when user submits incorrect answer and its not that 3rd try, will pop up automatically
                            $('#close3').on('click', () => { // when user clicks continue button
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
