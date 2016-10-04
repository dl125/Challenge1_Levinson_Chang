var orange = [];



function setup() {
  createCanvas(400,400);
  fill(0);
  for (var i = 1; i <= 10; i++) {
    orange[i - 1] = random(20, 400);
  }
}

function draw() {
  console.log(orange);
  for (var i = 1; i <= 10; i++) {
    rect(orange[i-1], i*20,50,50);
  }
}