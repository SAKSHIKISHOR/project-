var database;
var drawing = [];
var currentPath = [];
//var isDrawing = false;


function setup() {
  canvas = createCanvas(800,800);
  canvas.mousePressed(startPath);
  canvas.parent('canvascontainer'); 
  //canvas.mouseReleased(endPath);

  //var saveButton = select('#saveButtton');
//saveButton.mousePressed(saveDrawing());

var clearButton = select('#clearButton');
clearButton.mousePressed(clearDrawing);


  
  database = firebase.database();

  //var params = getURlParams();
  //console.log(params);
  //if(params.id){
   //console.log(params.id);
    //showDrawing(params.id);
 //}


 //var ref = database.ref('drawings');
 //ref.on('value',gotData , errData);

}

function startPath(){
  //isDrawing = true;
 currentPath = [];
 drawing.push(currentPath);
} 



//function endPath(){

  //isDrawing = false;

//}

function draw() {
  
    background(255,80,80);  
   
  if(mouseIsPressed){
    var point = {
      x: mouseX,
      y: mouseY
    }
    currentPath.push(point);
  }
  
  
  stroke(220);
  strokeWeight(3);
  noFill();
  
  for(var i = 0; i < drawing.length; i++){
    var path = drawing[i];
    beginShape();
    for(var j = 0; j < path.length; j++){
    vertex(path[j].x,path[j].y);
    
  }
  endShape();
  }
  
  drawSprites();
  }

//function saveDrawing(){

  

  //var ref = database.ref("drawings");
  //var data = {

  //name: "Eeshita",
  //drawing: drawing

  //}
  //var result = ref.push (data , dataSent);

  //console.log(result.key);
//function dataSent(status){

//console.log(err, status);

 // }

//}

//function mousePressed(){

 






  
//} 

//function gotData(data){

  //clear the listing
  //var elts = selectAll('.listing');
  //for(var i = 0; i < elts.length; i++){

    //elts[i].remove();

  //}

//var drawings = data.val();
//var keys = Object.keys(drawings);

//for(var i = 0; i < keys.length; i++){

  //var key = keys[i];
  //console.log(key);

  //var li = createElement('li','');
  //li.class('listing');
  //var ahref = createA('#',key);
  //ahref.mousePressed(showDrawing);
  //ahref.parent('li');

  //var perma = createA('?id=' + key , 'permalink');
  //perma.parent('li');
  //perma.style('padding','4px')

  //li.parent('drawinglist');

//}

//}

//function errData(err){

//console.log(err);

//}

//function showDrawing(key){

  //console.log(arguments);

  //if(key instanceof MouseEvent){

  //key = this.html();

  //}

  

//var ref = database.ref('drawings/' + key);
//ref.once('value' , oneDrawing,errData);

//}

//function oneDrawing(data){

//var dbdrawing = data.val();
//drawing = dbdrawing.drawing;
//console.log(drawing);



function clearDrawing(){
  drawing = [];
}
