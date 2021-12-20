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
    this.time.cs = 0;
    this.time.hour = 0;
    this.time.min = 0;
    this.time.sec = 0;
  }

  conversionCStoTime() {
    this.time.hour = Math.floor(this.time.cs / 36000);
    this.time.min = Math.floor((this.time.cs / 600) % 60);
    this.time.sec = Math.floor((this.time.cs / 10) % 60);
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

    return this.watchTimer(this.time);
  }
}
