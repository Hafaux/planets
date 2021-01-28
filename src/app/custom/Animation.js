import gsap from 'gsap/gsap-core';

export default class Animation {
  constructor() {
    this._planets = document.querySelectorAll('.dots');
    this._scaleBtn = document.querySelector('#scale-button');
    this._positionBtn = document.querySelector('#position-button');
    this._stopBtn = document.querySelector('#stop-button');
    this._tl = gsap.timeline();
  }

  scaleOnClick() {
    this.resetPlanets();
    this._tl.to(this._planets,
      {
        scale: 0,
        duration: 1,
        id: 'scaleStagger',
        stagger: {
          amount: 1,
          yoyo: true,
          repeat: -1,
        },
      });
  }

  positionOnClick() {
    this.resetPlanets();
    this._tl.to(this._planets,
      {
        y: 50,
        duration: 1,
        id: 'positionStagger',
        stagger: {
          amount: 0.5,
          from: 'edges',
          yoyo: true,
          repeat: -1,
        },
      });
  }

  stopOnClick() {
    this.resetPlanets();
  }

  resetPlanets() {
    // this._tl.clear();
    // this._tl.to(this._planets, { scale: 1, x: 0, y: 0, duration: 0 });
    this._tl.seek(0);
    this._tl.clear();
  }

  addListeners() {
    this._scaleBtn.addEventListener('click', this.scaleOnClick.bind(this));
    this._positionBtn.addEventListener('click', this.positionOnClick.bind(this));
    this._stopBtn.addEventListener('click', this.stopOnClick.bind(this));
  }

  init() {
    this.addListeners();
  }
}
