const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = 30;
const columns =30;
var snake;
var fruit;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.picklocation();
        var a1 = window.setInterval(()=>{
            ctx.clearRect(0,0,300,300);
            fruit.draw();
            snake.update();
            snake.draw();
            if(snake.eat(fruit)){
                fruit.picklocation();
            }

            var x =snake.checkCollision();
            if(x === true){
                clearInterval(a1);
                setup();
            }
        },150);
    window.setInterval(()=>{
        document.getElementById("Score").innerText = "Score:"+snake.score;
        document.getElementById("Level").innerText = "Level:"+snake.level;
    },50)
}());

window.addEventListener('keydown', ((evt)=>{
    const direction = evt.key.replace('Arrow','');
    snake.changeDirection(direction);
}));
