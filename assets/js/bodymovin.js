// --------------------------Map--------------------------

var animation = bodymovin.loadAnimation({
  container: document.getElementById('imgMap'), 
  path: 'assets/json/map/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Mapa",
})