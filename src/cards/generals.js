const generals = [
  {
    id: 1,
    name: 'Argeon Highmayne',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'lyonar',
    text:
      'Bloodbound Spell: Give a friendly minion nearby your General +2 Attack.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 51,
    name: 'Brome Warcrest',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'lyonar',
    text:
      'Bloodbound Spell: Summon a 1/2 Crestfallen with <b>Zeal</b>: <b>Provoke</b> in front of your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 323,
    name: 'Cassyva Soulreaper',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'abyssian',
    text:
      'Bloodbound Spell: Deal 1 damage to a minion. If it dies this turn, the space turns into Shadow Creep.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 254,
    name: 'Ciphyron Ascendant',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'vetruvian',
    text:
      'Bloodbound Spell: Give an enemy minion -2 Attack until your next turn.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 501,
    name: 'Faie Bloodwing',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    type: 'general',
    faction: 'vanar',
    text:
      "Bloodbound Spell: Deal 2 damage to all enemies in the enemy General's Column.",
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 558,
    name: 'Ilena Cryobyte',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'vanar',
    text: 'Bloodbound Spell: <b>Stun</b> a nearby enemy minion.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 101,
    name: 'Kaleos Xaan',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'songhai',
    text: 'Bloodbound Spell: Teleport a friendly minion up to 2 spaces.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 527,
    name: 'Kara Winterblade',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'vanar',
    text: 'Bloodbound Spell: Friendly minions summoned this turn gain +1/+1.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 301,
    name: 'Lilithe Blightchaser',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'abyssian',
    text: 'Bloodbound Spell: Summon 2 Wraithlings nearby your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 355,
    name: 'Maehv Skinsolder',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'abyssian',
    text:
      'Bloodbound Spell:  Destroy a friendly minion to summon a 4/4 Husk on its space. Deal 2 damage to your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 449,
    name: 'Ragnora the Relentless',
    set: 'core',
    type: 'general',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'magmar',
    text: 'Bloodbound Spell: Summon a Ripper Egg nearby your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 123,
    name: 'Reva Eventide',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'songhai',
    text: 'Bloodbound Spell: Summon a Heartseeker nearby your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 223,
    name: 'Scioness Sajj',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'vetruvian',
    text:
      'Bloodbound Spell: Your General deals double damage to minions this turn.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 152,
    name: 'Shidai Stormblossom',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'songhai',
    text:
      'Bloodbound Spell: Put a Spellsword into your action bar that cannot be replaced.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 418,
    name: 'Starhorn the Seeker',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'magmar',
    text: 'Bloodbound Spell: Both players draw a card.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 401,
    name: 'Vaath the Immortal',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'magmar',
    text: 'Bloodbound Spell: Give your General +1 Attack.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 23,
    name: "Zir'An Sunforge",
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'lyonar',
    text: 'Bloodbound Spell: Restore 3 Health to any Minion.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
  {
    id: 201,
    name: 'Zirix Starstrider',
    type: 'general',
    set: 'core',
    race: '',
    cost: 0,
    rarity: 'basic',
    faction: 'vetruvian',
    text:
      'Bloodbound Spell: Summon a 2/2 Iron Dervish on a random space nearby your General.',
    attack: 2,
    health: 25,
    spirit: 0,
  },
];

export default generals;
