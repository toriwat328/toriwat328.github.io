
$('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input[type="text"]').val();













$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=' + userInput

}).then(
    (data) => {
        if(userInput.toLowerCase() === 'iceland') {
            $('.modal-textbox-win').append('<p>Your In' + userInput + '</p>');
            $('.weather').append(data.location.name).attr('id', 'cityName');
            $('.weather').append(data.location.country).attr('id', 'country');
            $('.weather').append(data.current.temperature).attr('id', 'temp');
            $('.weather').append(data.current.weather_descriptions["0"]).attr('id', 'weather-descrip');
            $('.weather').append(data.current.weather_icons["0"]).attr('id', 'weather-icon');
            $('#win-modal').show(500);
                $('.modal-buttons').on('click', () => {
                    $('#win-modal').hide(400);
                });
        }


    },
    () => {
        console.log('bad request');
    }

)
    $(event.currentTarget).trigger('reset');
})
