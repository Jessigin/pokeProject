interface NamedAPIResource {
  name: string;
  url: string;
}

// Abilities
interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}

// Cries
interface Cries {
  latest: string;
  legacy: string;
}

// Forms
type Form = NamedAPIResource;

// Game Indices
interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

// Held Items
interface HeldItemVersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: HeldItemVersionDetail[];
}

// Moves
interface MoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: NamedAPIResource;
  order: number | null;
  version_group: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: MoveVersionGroupDetail[];
}

// Past Abilities
interface PastAbility {
  abilities: {
    ability: NamedAPIResource | null;
    is_hidden: boolean;
    slot: number;
  }[];
  generation: NamedAPIResource;
}

// Species
type Species = NamedAPIResource;

// Sprites (simplificado, se puede expandir aún más)
interface Sprites {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other?: Record<string, any>;
  versions?: Record<string, any>;
}

// Pokémon principal
export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  cries: Cries;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: HeldItem[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: PastAbility[];
  past_types: any[]; // puedes tipar según la API
  species: Species;
  sprites: Sprites;
}
