const car = module.exports = {
	color: 'silver',
	convertible: false,
	speed: 0,
	accelerate () {
		console.log(this.speed + " is the speed before accelerating");
		this.speed += 10;
		console.log(this.speed + " is the new speed after accelerating");
	},
	decelerate () {
		console.log(this.speed + " is the speed before decelerating");
		this.speed -= 5;
		console.log(this.speed + " is the speed after decelerating");
	},
};

car.accelerate();
car.decelerate();