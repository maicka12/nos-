function enviarBtn() {
  let ciudad = document.getElementById("ciudad").value;

  fetch(`https://api.weatherbit.io/v2.0/current?&city=${ciudad}&country=ES&key=10ebf4b951f244289bb22e0a21aca895`)
    .then(function(respuesta) {
      return respuesta.json();
    })
    .then(function(data) {
      let weatherData = "";

      for (let i = 0; i < data.data.length; i++) {
        const weather = data.data[i].weather;
        const iconUrl = `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`;
        weatherData += `
          <p>Codigo de pais: ${data.data[i].country_code}</p>
          <p>Ciudad: ${data.data[i].city_name}</p>
          <p>Temperatura: ${data.data[i].app_temp}</p>
          <p>Fecha: ${data.data[i].ob_time}</p>
          <p>Latitude: ${data.data[i].lat}</p>
          <p>Longitude: ${data.data[i].lon}</p>
          <p>Amanecer: ${data.data[i].sunrise} AM</p>
          <p>Puesta del sol: ${data.data[i].sunset} PM</p>
          <p>Presión: ${data.data[i].pres}</p>
          <p>Velocidad del viento: ${data.data[i].wind_spd}</p>
          <p>Dirección del viento: ${data.data[i].wind_cdir}</p>
          <p>Humedad relativa: ${data.data[i].rh}</p>
          <p>Cobertura de la nube: ${data.data[i].clouds}</p>
          <img src="${iconUrl}" alt="Icono del tiempo">
          <hr>
        `;
      }

      document.getElementById("weather-data").innerHTML = weatherData;
    })
}
