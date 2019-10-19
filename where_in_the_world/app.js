const countries = ['ICELAND', 'MOROCCO', 'AUSTRIA']

const openInstructions = $('#openInstructions').on('click', () => {
                            $('#instructions').show(500);
                                $('#close').on('click', () => {
                                    $('#instructions').hide(400);
        })
})



for(let i = 0; i < countries.length; i++) {

    $('form').on('submit', (event) => {
                event.preventDefault()

                    const userInput = $('input[type="text"]').val().toUpperCase();



$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + userInput

}).then(
    (data) => {

            if(userInput === countries[i]) {
                $('.status').append('<p>Your In ' + userInput + '</p>');
                $('.weather').append(data.location.name).attr('id', 'cityName').append('<br/>');
                $('.weather').append(data.location.country).attr('id', 'country').append('<br/>');
                $('.weather').append(data.current.temperature + ' Degrees').attr('id', 'temp').append('<br/>');
                $('.weather').append(data.current.weather_descriptions["0"]).attr('id', 'weather-descrip').append('<br/>');
                $('.weather').append(data.current.weather_icons["0"]).attr('id', 'weather-icon').append('<br/>');
                $('#win-modal').show(500);
                    $('.modal-buttons').on('click', () => {
                        $('#win-modal').hide(400);
                        $('main').append('<button>NextRound</button>').attr('id', 'next_button');
                            $('#next_button').on('click', () => {
                                $('.pic1').css('background-image', 'url("imgs/' + countries[i+1] +'1.JPG")');
                                $('.pic2').css('background-image', 'url("imgs/' + countries[i+1] +'2.JPG")');
                                $('.pic3').css('background-image', 'url("imgs/' + countries[i+1] +'3.JPG")');

                        })

                });
        }else if (userInput !== countries[i]) {
            $('#modal-wrong').show(500);
                $('.modal-buttons').on('click', () => {
                    $('#modal-wrong').hide(400);
                        $('main').append('<button>NextRound</button>').attr('id', 'next_button');
                            $('#next_button').on('click', () => {
                                $('.pic1').css('background-image', 'url("imgs/' + countries[i+1] +'1.JPG")');
                                $('.pic2').css('background-image', 'url("imgs/' + countries[i+1] +'2.JPG")');
                                $('.pic3').css('background-image', 'url("imgs/' + countries[i+1] +'3.JPG")');
        }


    },
    () => {
        console.log('bad request');
    }

)
    $(event.currentTarget).trigger('reset');
})
}
