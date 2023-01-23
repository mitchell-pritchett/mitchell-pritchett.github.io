var hour_xs = [];
var minute_ys = [];
var second_xs = [], second_ys = [];
let margin = 20;
let minute_x = 728;
let hour_y = margin;

var drop_box_y = 20;
var move_box_x = 728;

// colours
const second_cs = [
  'rgb(250, 250, 110)',
'rgb(241, 248, 110)',
'rgb(232, 246, 111)',
'rgb(223, 244, 112)',
'rgb(215, 241, 113)',
'rgb(206, 239, 114)',
'rgb(198, 237, 116)',
'rgb(189, 234, 117)',
'rgb(181, 232, 118)',
'rgb(173, 229, 120)',
'rgb(165, 226, 122)',
'rgb(157, 224, 123)',
'rgb(150, 221, 125)',
'rgb(142, 218, 126)',
'rgb(134, 215, 128)',
'rgb(127, 212, 130)',
'rgb(120, 209, 131)',
'rgb(112, 206, 133)',
'rgb(105, 203, 134)',
'rgb(98, 200, 135)',
'rgb(91, 196, 137)',
'rgb(84, 193, 138)',
'rgb(77, 190, 139)',
'rgb(70, 186, 140)',
'rgb(63, 183, 141)',
'rgb(57, 180, 142)',
'rgb(50, 176, 142)',
'rgb(43, 173, 143)',
'rgb(36, 169, 143)',
'rgb(28, 166, 143)',
];
  
const minute_c = 'rgb(28, 166, 143)';
const hour_c = 'rgb(42,102,118)';

function setup() {
  createCanvas(760, 760);

      
  for (var i = 0; i < 24; i++){
    append(hour_xs, margin+(i*720/24));
  }

  for (var i = 0; i < 60; i++){
    append(minute_ys, height-margin-((i+1)*(12)));
  }

  for (var i = 0; i < 60; i++){
    append(second_xs, margin+(i*12));
    append(second_ys, height-margin-((i+1)*12));
  }
}

function draw() {
  background(40);
  stroke(40);
  for (var i = 0; i < second(); i++){
    drawBox(second_xs[i], second_ys[i], 12, 12, second_cs[parseInt(i/2)]);
  }
  
  for (var i = 0; i < minute(); i++){
    drawBox(minute_x, minute_ys[i], 12, 12, minute_c);
  }

  for (var i = 0; i < hour(); i++){
    drawBox(hour_xs[i], hour_y, 12, 12, hour_c);
  }
  
  if (59 <= second()){
    if (drop_box_y <= minute_ys[minute()]){
    drawBox(second_xs[59],drop_box_y,12,12, second_cs[29]);
    drop_box_y += (minute_ys[minute()] - margin)/60;
    }
    else {
      drop_box_y = 20;
    }
  }
  
  if (59 <= second() & 59 <= minute()){
    if (move_box_x >= hour_xs[hour()]){
      drawBox(move_box_x,hour_y,12,12, hour_c);
      move_box_x -= (728-hour_xs[hour()])/60;
    }
    else {
      move_box_x = 610;
    }
  }
}

function drawBox(x, y, width, height, color='rgb(255,255,255)', rad=0) {
  fill(color); 
  rect(x, y, width, height, rad);
}