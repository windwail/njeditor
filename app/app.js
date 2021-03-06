import Konva from "konva";

// first we need to create a stage
var stage = new Konva.Stage({
    container: 'main_scene',   // id of container <div>
    width: 800,
    height: 600,

});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);