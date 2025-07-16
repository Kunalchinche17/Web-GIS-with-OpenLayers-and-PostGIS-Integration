var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  target: "map",
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});
// Define Source
var citiesSource = new ol.source.Vector();
// Define Layer
var citiesLayer = new ol.layer.Vector({
  source: citiesSource,
});
map.addLayer(citiesLayer);
$.ajax({
  url: "cities.php",
  type: "GET",
  success: function (dataResult) {
    var result = JSON.parse(dataResult);
    result.forEach(function (feat) {
      var feature = new ol.format.GeoJSON().readFeature(
        JSON.parse(feat["geom"])
      );
      feature.setProperties({ name: feat["name"] });
      citiesSource.addFeature(feature);
    });
  },
});

function featinfo(evt) {
  var clickedfeature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  if (clickedfeature) {
    document.getElementById("nameoffeature").innerText =
      clickedfeature.get("name");
    $("#featureinfo").modal("show");
  }
}

var clickedCoord;
function addFeatures(evt) {
  clickedCoord = evt.target.getCoordinateFromPixel(evt.pixel);
  console.log(clickedCoord);
  $("#addfeature").modal("show");
  map.on("click", featinfo);
  map.un("click", addFeatures);
}

// Getting information about feature on click
map.on("click", featinfo);

function addFeat() {
  map.un("click", featinfo);
  map.on("click", addFeatures);
}

function saveData() {
  var cityName = document.getElementById("cityname").value;
  if (cityName == "") {
    alert("please enter cityname");
  } else {
    $.ajax({
      url: "save_city.php",
      type: "POST",
      data: {
        name: cityName,
        long: clickedCoord[0],
        lat: clickedCoord[1],
      },
      success: function (dataResult) {
        var result = JSON.parse(dataResult);
        if (result.statusCode == 200) {
          console.log("added value successfully");
          // Reload the page to see the new feature
        } else {
          console.log("Some error with the code!");
        }
      },
    });
  }
}

// else {

//             long:clickedCoord[0] ,
//             lat: clickedCoord[1]
//         },
//         success:function(dataResult){
//             var result = JSON.parse(dataResult)
//             if (result.statusCode == 200){
//                 console.log('added value successfully')
//             } else {
//                 console.log('Some error with the code!')
//             }
//         }
// }
