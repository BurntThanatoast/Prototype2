title = "Beat Purgatory";

description = `Click to the Rhythm`;

characters = [];

const G = {
	WIDTH: 100,
	HEIGHT: 150
};

options = {
	viewSize: {x: G.WIDTH, y: G.HEIGHT}
};

const DELAY = 120;
const BEAT1 = 60;
const BEAT2 = 30;
const BEAT3 = 15;
const BEAT4 = 8;

let SONG = [];
let curTimer = 0;
let roundNumber = 1;
let curBeat = 0;
let sample = 1;

function update() {
	if (!ticks) {
		makeBeat();
	}
	countDown();
	if (input.isJustPressed) {
		timing();
	}

}

function makeBeat() {
	for (let roundCount = 0; roundCount < roundNumber; roundCount++) {
		SONG[roundCount] = rndi(1,3);
	}
}

function countDown() {
	if (curTimer >= 0 && curTimer < 16) {
		if (sample == 0) {
			color("red");
			text("CLICK", 40, 75);
		} else if (sample == 1) {
			color("red");
			text("MEMORIZE", 30, 75);
		}

	}
	if (curTimer > 0) {
	  curTimer -= 1;
	} else {
		if (SONG[curBeat] == 1) {
			if (sample == 1) {
				play("explosion");
			}
			curTimer = BEAT1;
			curBeat++;
		} else if (SONG[curBeat] == 2) {
			if (sample == 1) {
				play("explosion");
			}
			curTimer = BEAT2;
			curBeat++;
		} else if (SONG[curBeat] == 3) {
			if (sample == 1) {
				play("explosion");
			}
			curTimer = BEAT3;
			curBeat++;
		} else if (SONG[curBeat] == 4) {
			if (sample == 1) {
				play("explosion");
			}
			curTimer = BEAT4;
			curBeat++;
		}
		if (curBeat == SONG.length && sample == 0) {
			curBeat = 0;
			roundNumber++;
			sample = 1;
			curTimer = DELAY;
			makeBeat();
		} else if (curBeat == SONG.length && sample == 1) {
			play("explosion");
			curBeat = 0;
			curTimer = DELAY;
			sample = 0;
		}
	}
  }

  function timing() {
	if (sample == 0) {
		if (curTimer < 16) {
			addScore(10);
			play("powerUp");
		} else {
			sample = 1;
			curBeat = 0;
			curTimer = 0;
			roundNumber = 1;
			SONG = [];
			end();
		}
	}
  }
