let bgHue = 180; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  colorMode(HSB); 
  noStroke();
}

function draw() {
  bgHue = (bgHue + 0.1) % 360;
  background(bgHue, 30, 15);

  let h = hour();
  let m = minute();
  let s = second();

  let dateObj = new Date();
  let d = dateObj.getDate();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let currentMonth = monthNames[dateObj.getMonth()];
  let currentDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObj.getDay()];

  let cx = width / 2;
  let cy = height / 2;
  let maxRadius = min(width, height) / 3;

  let arcAnimation = sin(frameCount * 0.05) * 5;

  fill(210, 50, 60, 0.7); 
  arc(cx, cy, maxRadius * 2 + arcAnimation, maxRadius * 2 + arcAnimation, -90, map(s, 0, 60, -90, 270), PIE);

  fill(120, 50, 60, 0.7); 
  arc(cx, cy, maxRadius * 1.5 + arcAnimation, maxRadius * 1.5 + arcAnimation, -90, map(m, 0, 60, -90, 270), PIE);

  fill(30, 50, 60, 0.7); 
  arc(cx, cy, maxRadius + arcAnimation, maxRadius + arcAnimation, -90, map(h % 12, 0, 12, -90, 270), PIE);

  fill(255, 10, 90);
  ellipse(cx, cy, 12);

  push();
  translate(cx, cy);
  rotate(map(s, 0, 60, 0, 360));
  for (let i = 0; i < 12; i++) {
    let angle = map(i, 0, 12, 0, 360);
    let dotX = cos(angle) * (maxRadius * 0.75);
    let dotY = sin(angle) * (maxRadius * 0.75);
    fill(180, 60, 90); 
    ellipse(dotX, dotY, 6 + sin(frameCount * 0.1 + i) * 2);
  }
  pop();

  fill(30, 100, 80);
  textSize(48);
  text(`${nf(h, 2)}:${nf(m, 2)}:${nf(s, 2)}`, cx, cy - maxRadius - 40);

  textSize(24);
  fill(120, 100, 80);
  text(`${currentDay}, ${currentMonth} ${d}`, cx, cy + maxRadius + 30);

  let floatOffset = sin(frameCount * 0.05) * 10;
  fill(210, 80, 80); 
  textSize(36);
  text("Clock", cx, cy + floatOffset - maxRadius - 80);
}
