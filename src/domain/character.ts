import type { Attributes, AttributesProps } from "./attributes";
import type { CombatSkills } from "./combat-skills";
import type { Level } from "./level";

export class Character {
  constructor(private readonly props: CharacterProps) {}

  static create(params: CreateCharacterParams) {
    return new Character(params);
  }

  get level(): Level {
    return this.props.level;
  }

  get attributes(): AttributesProps {
    return this.props.attributes.props;
  }

  get combatSkills() {
    return this.props.combatSkills.props;
  }

  get vitality(): number {
    return 10 + 3 * this.attributes.vitality + 5 * this.level.value;
  }

  get chakra(): number {
    return 10 + 3 * this.attributes.spirit;
  }

  get readiness(): number {
    return this.props.skills.readiness + this.attributes.perception / 2;
  }

  get initiative(): number {
    return this.attributes.agility + this.readiness;
  }

  get dodgeReaction(): number {
    return 9 + this.combatSkills.dodge;
  }

  get displacement(): number {
    return 10 + this.attributes.agility / 2;
  }
}

export type CharacterProps = {
  name: string;
  level: Level;
  attributes: Attributes;
  combatSkills: CombatSkills;
  skills: {
    acrobatics: number;
    art: number;
    athletics: number;
    naturalSciences: number;
    concentration: number;
    culture: number;
    disguise: number;
    escape: number;
    stealth: number;
    handleAnimals: number;
    mechanism: number;
    medicine: number;
    occultism: number;
    prestidigitation: number;
    search: number;
    readiness: number;
    tracking: number;
    veneficium: number;
  };
  abilities: [];
  powers: [];
};

export type CreateCharacterParams = CharacterProps;
