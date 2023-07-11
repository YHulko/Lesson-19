/*$(document).ready(function() {
    $.getJSON('current.city.list.json', function(data) {
        $('select').on('change', function() {
            let out ='';
            for (let key in data){
                if (data[key].country == $('select option:selected').val()){
                    out += `<p value="${data[key].id}">${data[key].name}</p>`;
                }
            }
            $('.city').html(out);
            $('.city p').on('click', function(){
                $.get(
                    "http://api.openweathermap.org/data/2.5/weather",
                    {
                        "id": $(this).attr('value'),
                        "appid": "5d066958a60d315387d9492393935c19"
                    }, function(data) {
                        let out = '';
                        out += 'Погода: <b>'+data.weather[0].main+'</b><br>';
                        out += '<p style="text-align:center"><img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png"></p>';
                        out += 'Температура: <b>'+Math.round(data.main.temp-273.15)+'&#176;C</b><br>';
                        out += 'Влажність: <b>'+data.main.humidity+'</b><br>';
                        out += 'Давление: <b>'+Math.round(data.main.pressure*0.0075*100)+'мм.рт.ст.</b><br>';
                        out += 'Видимість: <b>'+(data.visibility/1000)+'км</b><br>';
                        //out += 'Скорость ветра: <b>'+Math.round(data.wind.speed*3.6)+'м/с</b><br>';
                        //out += 'Вітер: <b>'+data.wind.deg+'</b><br>';
                        console.log(data.main);
                        $('#weather').html(out);
                    }
                );
        });
})
});
});
*/
fetch('http://api.openweathermap.org/data/2.5/weather?q=Lutsk,UA&units=metric&APPID=5d066958a60d315387d9492393935c19')
.then(function (resp) {return resp.json()})
.then (function (data) {
    console.log(data);
    document.querySelector(".block1_city").textContent = data.name;
    document.querySelector(".block2_temp").innerHTML = "Температура: "+data.main.temp+'&deg;C';
    document.querySelector(".block2_clouds").textContent = data.weather[0].description;
    document.querySelector(".block4_icon").innerHTML = '<img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png">';
    document.querySelector(".block2_press").innerHTML = "Тиск: "+Math.round(data.main.pressure*0.75)+'мм.рт.ст';
    document.querySelector(".block2_humidity").textContent = "Вологість: "+data.main.humidity+'%';
    document.querySelector(".block2_wind").innerHTML = "Вітер, швидкість: "+Math.round(data.wind.speed*3.6)+'м/с';
    document.querySelector(".block2_wind_deg").innerHTML = "Вітер, напрям: "+data.wind.deg+'&deg;';
})
