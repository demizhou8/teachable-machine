let classifier;
let video;
let label;
let conf;

function preload() {
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/snA6DDr91/"
  );
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO,{flipped: true});
  video.hide();
  classifier.classifyStart(video, gotResults);
}

function gotResults(results){
  //console.log(results);
  label = results[0].label;
  conf = nf(results[0].confidence, 0, 2);
}

function draw() {
  background(220);
  image(video, 0, 0, width, height, 0, 0, video.width, video.height, COVER);
  //choose cover or contain
  textSize(50);
  fill(0);
  stroke(255);
  strokeWeight(5);
  text(label, 60, 70);
  textSize(30)
  text(conf, 60, 110);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}