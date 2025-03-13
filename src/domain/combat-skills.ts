import type { Attributes } from "./attributes";

export class CombatSkills {
  constructor(readonly props: CombatSkillsProps) {}

  static create(attributes: Attributes, params: CreateCombatSkillsParams) {
    const baseValue = 3;
    const combatSkillsValues = Object.values(params);
    const combatSkillsSum = combatSkillsValues.reduce((p, c) => p + c);

    const maximum = baseValue * 4;

    if (combatSkillsSum > maximum) {
      throw new Error(`Invalid combat skills, the maximum is ${maximum}`);
    }

    const min = 1;
    const max = 5;

    for (const value of combatSkillsValues) {
      if (value < min) {
        throw new Error(`Combat skill is lowest than the minium (${min})`);
      }

      if (value > max) {
        throw new Error(`Combat skill is greater than the maximum (${max})`);
      }
    }

    return new CombatSkills({
      bodyCombat: params.bodyCombat + attributes.props.agility,
      distanceCombat: params.distanceCombat + attributes.props.dexterity,
      dodge: params.dodge + attributes.props.agility,
      readMovement: params.readMovement + attributes.props.perception,
    });
  }
}

export type CombatSkillsProps = {
  readonly bodyCombat: number;
  readonly distanceCombat: number;
  readonly dodge: number;
  readonly readMovement: number;
};

export type CreateCombatSkillsParams = Omit<CombatSkillsProps, "baseValue">;
