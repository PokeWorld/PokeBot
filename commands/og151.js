exports.run = (bot, msg) => {
  const pokemon = [
    'Abra',
    'Aerodactyl',
    'Alakazam',
    'Arbok',
    'Arcanine',
    'Articuno',
    'Beedrill',
    'Bellsprout',
    'Blastoise',
    'Bulbasaur',
    'Butterfree',
    'Caterpie',
    'Chansey',
    'Charizard',
    'Charmander',
    'Charmeleon',
    'Clefable',
    'Clefairy',
    'Cloyster',
    'Cubone',
    'Dewgong',
    'Diglett',
    'Ditto',
    'Dodrio',
    'Doduo',
    'Dragonair',
    'Dragonite',
    'Dratini',
    'Drowzee',
    'Dugtrio',
    'Eevee',
    'Ekans',
    'Electabuzz',
    'Electrode',
    'Exeggcute',
    'Exeggutor',
    'Farfetch’d',
    'Fearow',
    'Flareon',
    'Gastly',
    'Gengar',
    'Geodude',
    'Gloom',
    'Golbat',
    'Goldeen',
    'Golduck',
    'Golem',
    'Graveler',
    'Grimer',
    'Growlithe',
    'Gyarados',
    'Haunter',
    'Hitmonchan',
    'Hitmonlee',
    'Horsea',
    'Hypno',
    'Ivysaur',
    'Jigglypuff',
    'Jolteon',
    'Jynx',
    'Kabuto',
    'Kabutops',
    'Kadabra',
    'Kakuna',
    'Kangaskhan',
    'Kingler',
    'Koffing',
    'Krabby',
    'Lapras',
    'Lickitung',
    'Machamp',
    'Machoke',
    'Machop',
    'Magikarp',
    'Magmar',
    'Magnemite',
    'Magneton',
    'Mankey',
    'Marowak',
    'Meowth',
    'Metapod',
    'Mew',
    'Mewtwo',
    'Moltres',
    'Mr. Mime',
    'Muk',
    'Nidoking',
    'Nidoqueen',
    'Nidoran♀',
    'Nidoran♂',
    'Nidorina',
    'Nidorino',
    'Ninetales',
    'Oddish',
    'Omanyte',
    'Omastar',
    'Onix',
    'Paras',
    'Parasect',
    'Persian',
    'Pidgeot',
    'Pidgeotto',
    'Pidgey',
    'Pikachu',
    'Pinsir',
    'Poliwag',
    'Poliwhirl',
    'Poliwrath',
    'Ponyta',
    'Porygon',
    'Primeape',
    'Psyduck',
    'Raichu',
    'Rapidash',
    'Raticate',
    'Rattata',
    'Rhydon',
    'Rhyhorn',
    'Sandshrew',
    'Sandslash',
    'Scyther',
    'Seadra',
    'Seaking',
    'Seel',
    'Shellder',
    'Slowbro',
    'Slowpoke',
    'Snorlax',
    'Spearow',
    'Squirtle',
    'Starmie',
    'Staryu',
    'Tangela',
    'Tauros',
    'Tentacool',
    'Tentacruel',
    'Vaporeon',
    'Venomoth',
    'Venonat',
    'Venusaur',
    'Victreebel',
    'Vileplume',
    'Voltorb',
    'Vulpix',
    'Wartortle',
    'Weedle',
    'Weepinbell',
    'Weezing',
    'Wigglytuff',
    'Zapdos',
    'Zubat',
  ];

  msg.channel.send(pokemon[Math.floor(Math.random() * pokemon.length)]);
};

exports.conf = {
  aliases: [],
  guildOnly: true,
};

exports.help = {
  name: 'og151',
  description: 'Randomly picks one of the generation 1 pokemon, and gives you its name.',
  category: 'Fun',
};
