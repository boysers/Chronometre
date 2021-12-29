/**
 * Créer une class newChrono et "extends" Chrono | 
 * Réassigner la propriété watchTimer dans le construtor : 
 * this.watchTimer = () => {
      displayTimer(this.time, input);
    };
 * 
 */
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

    this.firstDate = 0;
    this.latestDate = 0;

    this.cs = 0;
  }

  reset() {
    for (let i in this.time) {
      this.time[i] = 0;
    }

    this.firstDate = 0;
    this.latestDate = 0;

    this.cs = 0;
  }

  /**
   * Calcul le départ du chrono moins le temps apres la pause
   * S'il n'y a pas eu de pause avant, this.cs = 0
   */
  addFirstDate() {
    this.firstDate = Math.floor(
      this.conversionMStoCS(new Date().valueOf()) - this.cs
    );
  }

  addLatestDate() {
    this.latestDate = this.conversionMStoCS(new Date().valueOf());
  }

  conversionMStoCS(ms) {
    return Math.floor(ms / 100);
  }

  conversionCStoTime() {
    let t = this.time;

    t.hour = Math.floor(this.cs / 36000);
    t.min = Math.floor((this.cs / 600) % 60);
    t.sec = Math.floor((this.cs / 10) % 60);
    t.cs = Math.floor((this.cs * 10) % 100);
  }

  /**
   * Calcul la date en Direct moins le temps de départ de la date
   */
  addCS() {
    this.cs = Math.floor(this.latestDate - this.firstDate);
  }

  start() {
    if (!this.chronoPause) return;

    this.addFirstDate();

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

  /**
   * setInterval, 100 ms |
   * Fonction à ajouter pour configurer l'afficheur : watchTimer();
   */
  stopwatch() {
    this.conversionCStoTime();
    this.addLatestDate();
    this.addCS();

    // ---
    this.watchTimer();
    // ---
  }
}
