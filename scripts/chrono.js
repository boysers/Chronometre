export default class Chrono {
  constructor(watchTimer) {
    this.watchTimer = watchTimer;

    this.chronoSetInterval = null;
    this.chronoPause = true;
    this.time = {
      cs: 0,
      hour: 0,
      min: 0,
      sec: 0,
    };
  }

  reset() {
    let t = this.time;

    t.cs = 0;
    t.hour = 0;
    t.min = 0;
    t.sec = 0;
  }

  conversionCStoTime() {
    let t = this.time;

    t.hour = Math.floor(t.cs / 36000);
    t.min = Math.floor((t.cs / 600) % 60);
    t.sec = Math.floor((t.cs / 10) % 60);
  }

  start() {
    if (!this.chronoPause) return;
    this.chronoPause = false;

    this.chronoSetInterval = setInterval(this.stopwatch.bind(this), 100);
  }

  stop() {
    this.chronoPause = true;
    clearTimeout(this.chronoSetInterval);
    this.reset();
  }

  pause() {
    this.chronoPause = true;
    clearTimeout(this.chronoSetInterval);
  }

  stopwatch() {
    this.time.cs++;
    this.conversionCStoTime();

    this.watchTimer();
  }
}
