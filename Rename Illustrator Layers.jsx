main();
function main() {

if(app.activeDocument != null) {
var document = app.activeDocument;
var layers = document.layers;

var layer;
for(var l = 0; l < layers.length; l++) {
    layer = layers[l];
    layer.name = "New Layer Name "+ l;
    }
} else {
            alert("No Document selected");
            return false;
            }

}