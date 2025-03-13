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
        total: 4 + 2 * increase,
        max: Math.floor(this.value / 2),
      },
      abilities: {
        total: 4 + 2 * increase,
      },
    };
  }
}
