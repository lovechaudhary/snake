const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const cols = canvas.width / scale;


var snake;
var fruit;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();
    fruit.draw();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }

    }, 250);
}());

window.addEventListener('keydown', ((evt) => {
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
