
var pixel 		= create2DArray(createRadialCanvas(2,2));
var raindrop 	= create2DArray(createRadialCanvas(4,4));
var finger 		= create2DArray(createRadialCanvas(14,14));

var width = 400;
var height = 300;

function init(){
	// Init the basic components
	var waterModel = new WaterModel(width, height, {
									resolution:2.0,
									interpolate:false,
									damping:0.985,
									clipping:5,
									evolveThreshold:0.05,
									maxFps:50,
									showStats:false
								});
	var waterCanvas = new WaterCanvas(width, height, "waterHolder", waterModel, {
									backgroundImageUrl:"assets/images/water.jpg",
									lightRefraction:9.0,
									lightReflection:0.1,
									showStats:false
								});


	// Init some utils
	var rainMaker = new RainMaker(width, height, waterModel, raindrop);
	rainMaker.setRaindropsPerSecond(1);
	enableMouseInteraction(waterModel, "waterHolder");


	// Sliders and knobs with JQueryUI
	$("#imageChooser").change(function () {
		$("#imageChooser option:selected").each(function () {
			waterCanvas.setBackground($(this).val());
		});
	});

	$("#width").val(width);
	$("#height").val(height);

	$("#setImage").button();
	$("#setImage").click(function() {
		width = $("#width").val();
		height = $("#height").val();
		waterCanvas.setSize(
			width , height);
		waterModel.resetSizeAndResolution(
			width , height,
			$("#resolution").slider("option", "value"));
	});


	$("#rainSpeedLabel").html(1);
	$("#rainSpeed").slider({ min:0, max:50, step: 0.1, value:1 });
	$("#rainSpeed").bind("slide", function(event, ui) {
		$("#rainSpeedLabel").html(ui.value);
		rainMaker.setRaindropsPerSecond(ui.value);
	});

	$("#rainPressureLabel").html("1.0 to 3.0");
	$("#rainPressure").slider({range: true, min:0, max:10, step: 0.1, values:[1.0, 3.0] });
	$("#rainPressure").bind("slide", function(event, ui) {
		$("#rainPressureLabel").html(ui.values[0] + " to " + ui.values[1]);
		rainMaker.setRainMinPressure(ui.values[0]);
		rainMaker.setRainMaxPressure(ui.values[1]);
	});

	$("#fpsWaterLabel").html(50);
	$("#fpsWater").slider({ min:0, max:70, step: 0.1, value:50 });
	$("#fpsWater").bind("slide", function(event, ui) {
		$("#fpsWaterLabel").html(ui.value);
		waterModel.setMaxFps(ui.value);
	});

	$("#refractionLabel").html(9);
	$("#refraction").slider({ min:0, max:60, step: 0.1, value:9 });
	$("#refraction").bind("slide", function(event, ui) {
		$("#refractionLabel").html(ui.value);
		waterCanvas.setLightRefraction(ui.value);
	});

	$("#reflectionLabel").html(0.1);
	$("#reflection").slider({ min:0, max:1, step: 0.01, value:0.1 });
	$("#reflection").bind("slide", function(event, ui) {
		$("#reflectionLabel").html(ui.value);
		waterCanvas.setLightReflection(ui.value);
	});

	$("#dampingLabel").html(0.985);
	$("#damping").slider({ min:0.8, max:1.0, step: 0.001, value:0.985});
	$("#damping").bind("slide", function(event, ui) {
		$("#dampingLabel").html(ui.value);
		waterModel.setDamping(ui.value);
	});


	$("#resolutionLabel").html(3);
	$("#resolution").slider({ min:1, max:10, step: 0.1, value:3});
	$("#resolution").bind("slide", function(event, ui) {
		$("#resolutionLabel").html(ui.value);
		waterModel.resetSizeAndResolution(width, height, ui.value);
	});

	$("#interpolate").button();
	$("#interpolate").click(function(){
		waterModel.setInterpolation(this.checked);
	});
}

function init1(){
	// Init the basic components
	var waterModel = new WaterModel(width, height, {
									resolution:2.0,
									interpolate:false,
									damping:0.985,
									clipping:5,
									evolveThreshold:0.05,
									maxFps:50,
									showStats:false
								});
	var waterCanvas = new WaterCanvas(width, height, "waterHolder1", waterModel, {
									backgroundImageUrl:"assets/images/water.jpg",
									lightRefraction:9.0,
									lightReflection:0.1,
									showStats:false
								});


	// Init some utils
	var rainMaker = new RainMaker(width, height, waterModel, raindrop);
	rainMaker.setRaindropsPerSecond(1);
	enableMouseInteraction(waterModel, "waterHolder1");


	// Sliders and knobs with JQueryUI
	$("#imageChooser").change(function () {
		$("#imageChooser option:selected").each(function () {
			waterCanvas.setBackground($(this).val());
		});
	});

	$("#width").val(width);
	$("#height").val(height);

	$("#setImage").button();
	$("#setImage").click(function() {
		width = $("#width").val();
		height = $("#height").val();
		waterCanvas.setSize(
			width , height);
		waterModel.resetSizeAndResolution(
			width , height,
			$("#resolution").slider("option", "value"));
	});


	$("#rainSpeedLabel").html(1);
	$("#rainSpeed").slider({ min:0, max:50, step: 0.1, value:1 });
	$("#rainSpeed").bind("slide", function(event, ui) {
		$("#rainSpeedLabel").html(ui.value);
		rainMaker.setRaindropsPerSecond(ui.value);
	});

	$("#rainPressureLabel").html("1.0 to 3.0");
	$("#rainPressure").slider({range: true, min:0, max:10, step: 0.1, values:[1.0, 3.0] });
	$("#rainPressure").bind("slide", function(event, ui) {
		$("#rainPressureLabel").html(ui.values[0] + " to " + ui.values[1]);
		rainMaker.setRainMinPressure(ui.values[0]);
		rainMaker.setRainMaxPressure(ui.values[1]);
	});

	$("#fpsWaterLabel").html(50);
	$("#fpsWater").slider({ min:0, max:70, step: 0.1, value:50 });
	$("#fpsWater").bind("slide", function(event, ui) {
		$("#fpsWaterLabel").html(ui.value);
		waterModel.setMaxFps(ui.value);
	});

	$("#refractionLabel").html(9);
	$("#refraction").slider({ min:0, max:60, step: 0.1, value:9 });
	$("#refraction").bind("slide", function(event, ui) {
		$("#refractionLabel").html(ui.value);
		waterCanvas.setLightRefraction(ui.value);
	});

	$("#reflectionLabel").html(0.1);
	$("#reflection").slider({ min:0, max:1, step: 0.01, value:0.1 });
	$("#reflection").bind("slide", function(event, ui) {
		$("#reflectionLabel").html(ui.value);
		waterCanvas.setLightReflection(ui.value);
	});

	$("#dampingLabel").html(0.985);
	$("#damping").slider({ min:0.8, max:1.0, step: 0.001, value:0.985});
	$("#damping").bind("slide", function(event, ui) {
		$("#dampingLabel").html(ui.value);
		waterModel.setDamping(ui.value);
	});


	$("#resolutionLabel").html(3);
	$("#resolution").slider({ min:1, max:10, step: 0.1, value:3});
	$("#resolution").bind("slide", function(event, ui) {
		$("#resolutionLabel").html(ui.value);
		waterModel.resetSizeAndResolution(width, height, ui.value);
	});

	$("#interpolate").button();
	$("#interpolate").click(function(){
		waterModel.setInterpolation(this.checked);
	});
}

