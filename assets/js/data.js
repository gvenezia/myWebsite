// I've added several key-value paris to a list originally written by Colt Steele and edited by Jaime Pagan
var keyData = {
	q: {
		sound: new Howl({
  		src: ['sounds/bubbles.mp3']
		}),
		color: '#1abc9c',
		size: 500,
		num: 3,
		speed: .9,
		pulse: 8
	},
	w: {
		sound: new Howl({
  		src: ['sounds/clay.mp3']
		}),
		color: '#2ecc71',
		size: 800,
		num: 1,
		speed: .85,
		pulse: 2
	},
	e: {
		sound: new Howl({
  		src: ['sounds/confetti.mp3']
		}),
		color: '#3498db',
		size: 200,
		num: 1,
		speed: .9,
		pulse: 2,
		scatter: true
		
	},
	r: {
		sound: new Howl({
  		src: ['sounds/corona.mp3']
		}),
		color: '#9b59b6',
		size: 30,
		num: 50,
		speed: .96,
		pulse: 2
	},
		t: {
		sound: new Howl({
  		src: ['sounds/dotted-spiral.mp3']
		}),
		color: '#34495e',
		size: 1000,
		num: 1,
		speed: .95,
		pulse: 5
	},
	y: {
		sound: new Howl({
  		src: ['sounds/flash-1.mp3']
		}),
		color: '#16a085',
		size: 10,
		num: 200,
		speed: .8,
		pulse: 10
	},
	u: {
		sound: new Howl({
  		src: ['sounds/flash-2.mp3']
		}),
		color: '#27ae60',
		size: 80,
		num: 100,
		speed: .31,
		pulse: 1
	},
	i: {
		sound: new Howl({
  		src: ['sounds/flash-3.mp3']
		}),
		color: '#2980b9',
		size: 200,
		num: 1,
		speed: .75,
		pulse: 2
	},
	o: {
		sound: new Howl({
			src: ['sounds/glimmer.mp3']
		}),
		color: '#8e44ad',
		size: 100,
		num: 10,
		speed: .9,
		pulse: 5
	},
	p: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50',
		size: 800,
		num: 3,
		speed: .95,
		pulse: 2
	},
	a: {
		sound: new Howl({
  		src: ['sounds/pinwheel.mp3']
		}),
		color: '#f1c40f',
		size: 500,
		num: 1,
		speed: .9,
		pulse: 5
	},
	s: {
		sound: new Howl({
  		src: ['sounds/piston-1.mp3']
		}),
		color: '#e67e22',
		size: 1000,
		num: 1,
		speed: .5,
		pulse: 1
	},
		d: {
		sound: new Howl({
  		src: ['sounds/piston-2.mp3']
		}),
		color: '#e74c3c',
		size: 200,
		num: 1,
		speed: .8,
		pulse: 2
	},
	f: {
		sound: new Howl({
  		src: ['sounds/prism-1.mp3']
		}),
		color: '#95a5a6',
		size: 200,
		num: 30,
		speed: .9,
		pulse: 2
	},
	g: {
		sound: new Howl({
  		src: ['sounds/prism-2.mp3']
		}),
		color: '#f39c12',
		size: 200,
		num: 3,
		speed: .9,
		pulse: 10
	},
	h: {
		sound: new Howl({
  		src: ['sounds/prism-3.mp3']
		}),
		color: '#d35400',
		size: 5,
		num: 100,
		speed: .98,
		pulse: 2
	},
	j: {
		sound: new Howl({
  		src: ['sounds/splits.mp3']
		}),
		color: '#1abc9c',
		size: 300,
		num: 8,
		speed: .85,
		pulse: 3
	},
	k: {
		sound: new Howl({
  		src: ['sounds/squiggle.mp3']
		}),
		color: '#2ecc71',
		size: 200,
		num: 1,
		speed: .9,
		pulse: 2
	},
	l: {
		sound: new Howl({
  		src: ['sounds/strike.mp3']
		}),
		color: '#3498db',
		size: 100,
		num: 25,
		speed: .88,
		pulse: 3
	},
	z: {
		sound: new Howl({
  		src: ['sounds/suspension.mp3']
		}),
		color: '#9b59b6',
		size: 100,
		num: 8,
		speed: .85,
		pulse: 8
	},
	x: {
		sound: new Howl({
  		src: ['sounds/timer.mp3']
		}),
		color: '#34495e',
		size: 40,
		num: 80,
		speed: .9,
		pulse: 5
	},
	c: {
		sound: new Howl({
  		src: ['sounds/ufo.mp3']
		}),
		color: '#16a085',
		size: 400,
		num: 1,
		speed: .9,
		pulse: 1
	},
	v: {
		sound: new Howl({
  		src: ['sounds/veil.mp3']
		}),
		color: '#27ae60',
		size: 500,
		num: 1,
		speed: .85,
		pulse: 2
	},
	b: {
		sound: new Howl({
  		src: ['sounds/wipe.mp3']
		}),
		color: '#2980b9',
		size: 100,
		num: 10,
		speed: .8,
		pulse: 4
	},
	n: {
		sound: new Howl({
			src: ['sounds/zig-zag.mp3']
		}),
		color: '#8e44ad',
		size: 200,
		num: 5,
		speed: .9,
		pulse: 2
	},
	m: {
		sound: new Howl({
  		src: ['sounds/moon.mp3']
		}),
		color: '#2c3e50',
		size: 1000,
		num: 2,
		speed: .95,
		pulse: 2
	}
}

		// 	function scatter(circle, destination){
		// 	// Each frame, move the path 1/30th of the difference in position
		// 	// between it and the destination.
			
		// 	// The vector is the difference between the position of
		// 	// the circle(s) and the destination point:
		// 	var vector = destination - circle.position;

		// 	console.log("scatter function: circle is" + circle);

		// 	// Add 1/30th of the vector to the position property
		// 	// of the text item, to move it in the direction of the
		// 	// destination point
		// 	circle.position += vector / 300;
		// }