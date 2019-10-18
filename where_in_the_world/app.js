


$.ajax({
    url: 'http://api.weatherstack.com/current?access_key=987e40f5d0c5db5e98ec4246d66b6cd3&query=Reykjavik'

}).then(
    (data) => {
        console.log(data);
    },
    () => {
        console.log('bad request');
    }

)
