function Mouse(name) {
    this.name = name;
    this.dead = false;
}

Mouse.prototype.die = function () {
    this.dead = true;
}

function Cat() {
    this.stomach = [];
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
    mouse.die();
}

var mickey = new Mouse("Mickey");
var jerry = new Mouse("Jerry");
var tom = new Cat();
console.log(tom);
tom.eat(mickey);
console.log(tom);
tom.eat(jerry);
console.log(tom);