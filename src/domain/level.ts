export class Level {
  constructor(readonly value: number) {}

  static create(value: number) {
    return new Level(value);
  }

  get level(): number {
    return this.value;
  }

  get limits() {
    const increase = this.value - 4;
    const isMoreOrKage = this.value >= 20;
    const powerBaseLimit = 4 + 2 * increase;

    return {
      attributes: {
        total: 12 + 6 * increase,
        min: Math.ceil(increase / 2),
        max: this.value,
      },
      skills: {
        total: 8 + 4 * increase,
        max: this.value,
      },
      powers: {
        total: isMoreOrKage ? powerBaseLimit + 4 : powerBaseLimit,
        max: Math.floor(this.value / 2),
      },
      abilities: {
        total: isMoreOrKage ? powerBaseLimit + 4 : powerBaseLimit,
      },
    };
  }
}
