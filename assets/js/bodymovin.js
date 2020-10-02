// --------------------------Map--------------------------
lottie.loadAnimation({
  container: document.getElementById('imgMap'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'assets/json/map/data.json',
  name: "map"
});

$(window).on("scroll" ,function() {
	let elem = $('#imgMap')
	let viewScrollTop = $(window).scrollTop(); 
  let topElemD = elem.position().top - 110;
  let heightElem = elem.height()
  let total = topElemD - heightElem
  let total2 = topElemD + heightElem

  if (viewScrollTop > total) {
  	lottie.play("map")
  	
  } else {
  	lottie.stop("map")
  }

  if (viewScrollTop > total2) {
  	lottie.stop("map")
  }
})

// --------------------------Ubucation--------------------------

// lottie.loadAnimation({
//   container: document.getElementById('ubication'),
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   path: 'assets/json/ubication/data.json',
//   name: "ubication"
// });

// $(window).on("scroll" ,function() {
// 	let elem = $('#ubication')
// 	let viewScrollTop = $(window).scrollTop(); 
//   let topElemD = elem.position().top - 110;
//   let heightElem = elem.height()
//   let total = topElemD - heightElem
//   let total2 = topElemD + heightElem

//   if (viewScrollTop > total) {
//   	lottie.play("ubication")
  	
//   } else {
//   	lottie.stop("ubication")
//   }

//   if (viewScrollTop > total2) {
//   	lottie.stop("ubication")
//   }
// })