class Snake {
    constructor(size) {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.size = size;
    }

    update() {  //movement of snake
        this.x = this.x + this.xspeed * this.size;
        this.y = this.y + this.yspeed * this.size;

        this.x = constrain(this.x, 0, width - this.size);
        this.y = constrain(this.y, 0, height - this.size);
    }

    show() { //drawing snake
        fill(0, 255, 0);
        square(this.x, this.y, this.size);
    }

    move(dir_x, dir_y) {
        this.xspeed = dir_x;
        this.yspeed = dir_y;

    }

    eat(Food_pos) {
        return dist(this.x, this.y, Food_pos.x, Food_pos.y) < 1;
    }
}

let food;
let s;
let cwidth = 900;
let cheight = 600;
let grid = [];

function setup() {
    //creating canvas
    createCanvas(cwidth, cheight);
    //set framerate so it looks more retro xD
    frameRate(10);
    s = new Snake(30);
    FoodRandomizer();

}

function FoodRandomizer() {
    rows = floor(height / s.size);
    cols = floor(width / s.size);
    food = createVector(floor(random(cols)),floor(random(rows)));
    food.mult(s.size);



}

function draw() {

    background(30);
    s.show();
    s.update();
    if(s.eat(food))
    {
        FoodRandomizer();
    }
    square(food.x, food.y, s.size);

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        s.move(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        s.move(0, 1);
    } else if (keyCode === LEFT_ARROW) {
        s.move(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        s.move(1, 0);
    }
}