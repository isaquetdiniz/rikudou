import type { Level } from "./level";

export class Attributes {
  constructor(readonly props: AttributesProps) {}

  static create(level: Level, params: AttributesProps) {
    const {
      limits: { attributes },
    } = level;

    const attributesValues = Object.values(params);
    const attributesSum = attributesValues.reduce((p, c) => p + c);

    if (attributesSum > attributes.total) {
      throw new Error(
        `Attributes sum is greater than the maximum (${attributes.total})`
      );
    }

    for (const value of attributesValues) {
      if (value < attributes.min) {
        throw new Error(
          `Attribute is lowest than the minium (${attributes.min})`
        );
      }

      if (value > attributes.max) {
        throw new Error(
          `Attribute is greater than the maximum (${attributes.max})`
        );
      }
    }

    return new Attributes(params);
  }
}

export type AttributesProps = {
  readonly strength: number;
  readonly dexterity: number;
  readonly agility: number;
  readonly perception: number;
  readonly intelligence: number;
  readonly vitality: number;
  readonly spirit: number;
};
