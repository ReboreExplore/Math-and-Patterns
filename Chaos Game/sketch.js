
let a1,b1;
let a2,b2;
let a3,b3;
let ai,bi;
let p1,p2;


function setup() {
  createCanvas(1000, 1000);
  a1 = random(width);
  b1 = random(0,height/3);
  a2 = random(0,width/2);
  b2 = random(height/3,2*height/3);
  a3 = random(width/2,width);
  b3 = random(height/3,2*height/3);
  ai = random(width);
  bi = random(height);
  background(0);
  stroke(255);
  stroke('pink');
  strokeWeight(5);
  point(a1,b1);
  point(a2,b2);
  point(a3,b3);
  stroke('white');
  point(ai,bi);

}

function draw() {
  rand_roll = random([1,2,3,4,5,6]);
  print(rand_roll);
  if(rand_roll==1 | rand_roll==2){
    p1,p2 = point_comp(a1,b1,ai,bi);
  }
  else if(rand_roll==3 | rand_roll==4){
    p1,p2 = point_comp(a2,b2,ai,bi);
  }
  else if(rand_roll==5 | rand_roll==6){
    p1,p2 = point_comp(a3,b3,ai,bi);
    print(p1);
    print(p2);
  }
  ai = p1;
  bi = p2;
  rand_colors = random(['red','yellow','purple','white','green','pink','blue','brown','grey']);
  stroke(rand_colors);
  point(ai,bi);
}

function point_comp(x1,y1,x2,y2){
  p1 = (x1+x2)/2;
  p2 = (y1+y2)/2;
  return p1,p2;
}

