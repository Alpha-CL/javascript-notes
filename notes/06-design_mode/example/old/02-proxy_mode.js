///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let mrDeng = {
	sendFlower(target) {
		let flower = 'sunflower';
		target.receiveFlower(flower);
	}
};

let goddess = {
	mood: null,
	createMood() {
		this.changeMood();
		setInterval(() => {
			this.changeMood();
		}, 400);
	},
	changeMood() {
		this.mood = Math.random() < .4;
	},
	receiveFlower(flower) {
		this.mood ? console.log('ok') : console.log('get out');
	}
};

// goddess.createMood();
// mrDeng.sendFlower(goddess);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


let proxy = {
	proxySendFlower(target) {
		this.listenMood(target, () => {
			mrDeng.sendFlower(target);
		});
	},
	listenMood(target, cb) {
		let timer = setInterval(() => {
			if (target.mood) {
				cb && cb();
				clearInterval(timer);
			}
		}, 300);
	},
};

goddess.createMood();
proxy.proxySendFlower(goddess);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




