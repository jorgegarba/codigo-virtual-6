var miMapa = L.map('miMapa').setView([51.505, -0.09], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja21vOTJ4Nm8waXppMnZrNTRoNXJlbXdiIn0.P_K9HjwwpSJQUkvKddhpcA', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja21vOTJ4Nm8waXppMnZrNTRoNXJlbXdiIn0.P_K9HjwwpSJQUkvKddhpcA'
}).addTo(miMapa);
var marker = L.marker([51.5, -0.09]).addTo(miMapa);

miMapa.on("click", (e) => {

  console.log("Latitud: " + e.latlng.lat);
  console.log("Longitud: " + e.latlng.lng);
})


const btnPuno = document.getElementById("btnPuno");

btnPuno.onclick = () => {
  miMapa.flyTo([-15.83785414579054, -70.02803564071657], 13);
  marker.setLatLng([-15.83785414579054, -70.02803564071657]);
}
