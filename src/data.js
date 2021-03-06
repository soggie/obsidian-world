// Database of locations
export const cities = [
  {
    name: 'Morhas',
    desc: 'A gargantuan spire built atop a massive caldera of bubbling magma. Famed for the purity of their obsidian, their dour demeanour, and their fanatical adherence to tradition and order.',
    coord: L.latLng(-103.625, 172.625)
  },

  {
    name: 'Crasoa',
    desc: 'A city built atop the ruins of an ancient colosseum. Ruled by warrior poets. Prideful of their martial traditions, but denies their role in the waystone network\'s destruction through their warmonmgering.',
    coord: L.latLng(-82.875, 71.25)
  },

  {
    name: 'Gausk',
    desc: 'A city of flags, perfect squares, and crossroads. Once a prosperous trading hub, now an isolated, rotting den of thieves after the destruction of the waystone network.',
    coord: L.latLng(-122.3125, 94.8125)
  },

  {
    name: 'Somar',
    desc: 'Haven for sorcerers, mystics and fateweavers. A city that spans three realms at once: the real world, the realm of nightmares, and the realm of spirits. Dosmeticated giant spiders as mounts.',
    coord: L.latLng(-142.125, 51.75)
  },

  {
    name: 'Nekris',
    desc: 'A necropolis where death is only the beginning of eternal servitude. Necromancy is respected and widely studied and practised. Obsessed with personal legacy and familial history.',
    coord: L.latLng(-127.8125, 169.8125)
  },

  {
    name: 'Telerea',
    desc: 'A wonderous underwater city along the frozen coast. Pioneered the attainment of lichdom by replacing body parts with magic-infused mechanical equivalents. Insular and distrustful of outsiders.',
    coord: L.latLng(-83.125, 191.375)
  },

  {
    name: 'Raak',
    desc: 'Thousands of vertical farms form the foundations of the city of stilts. Plagued by a massive surplus of food due to a fertility ritual gone wrong. Ruled by a coven of shapeshifting druids.',
    coord: L.latLng(-159.25, 185.875)
  },
]

export const ruins = [
  {
    name: 'Temple of the Dawn',
    desc: 'A massive ziggurat said to contain tomes and codices from ancient times in pristine condition. Zealously guarded by an influential society of remembrancers called the Awakened Order.',
    coord: L.latLng(-133.9375, 144.6875)
  },

  {
    name: 'Ashenfel',
    desc: 'Believed to be the capital of the forgotten empire, now a scorched ruins infested with endless otherworldly horrors from beyond the Breach, held at bay by a tireless stream of crusaders from Nekris',
    coord: L.latLng(-125.6875, 162)
  },

  {
    name: 'Sinthar',
    desc: 'Legendary stronghold of the Sintharii Circle that monopolised inter-city travel after the destruction of the waystone network. No outsider has succeeded in locating the stronghold yet.',
    coord: L.latLng(-121.0625, 181.25)
  },

  {
    name: 'Xisari Colossus',
    desc: 'The petrified remains of a four-limbed giant in the midst of casting a spear into the western sky. A faint purple glow pulses from its eyes. Those who gaze upon it go mad within minutes.',
    coord: L.latLng(-110.375, 29.9375)
  },

  {
    name: 'Flesh Pit',
    desc: 'A massive crater lined with unknown organic matter, slime, blood and bone fragments. In the center of the pit is an upraised hand clutching an ornate weapon in pristine condition.',
    coord: L.latLng(-137.71875, 82.625)
  },

  {
    name: 'Tower of Nadak',
    desc: 'An ornate and ancient tower with thousands of chattering skulls lining its walls, eager to strike up conversation with tresspassers. A pale purple glow shines from the cracks of its masonry.',
    coord: L.latLng(-114, 127.6875)
  },

  {
    name: 'Blightharrow',
    desc: 'Fortress of the Viceron Watch. First line of defense against eldritch horrors that crosses over to Itheas through the Breach. Raids passing caravans for child captives to fill their ranks.',
    coord: L.latLng(-106.625, 145.125)
  },

  {
    name: 'Harvest Point',
    desc: 'Ruins of an ancient storage facility. Warding sigils written in glowing ink line the walls of every silo. A fence of crucified corpses sing discordant tunes to ward away trespassers.',
    coord: L.latLng(-98.9375, 41)
  }
]

export const locations = [
  {
    name: 'Wyrmfall Pass',
    desc: 'A valley flanked by massive pillars of rune-etched stones resembling a rib cage of a gargantuan wyrm. The only (relatively) safe passage through the Severim Range. Home to soul-eating giant vultures.',
    coord: L.latLng(-116.5625, 105.5625)
  },

  {
    name: 'Dawnseeker Pass',
    desc: 'Legend has it that the great warrior Dawnseeker smashed the mountain into two with her axe so she could lead her people north towards a safe haven in her visions. Now haunted by shadow wolves.',
    coord: L.latLng(-107.75, 81.0625)
  },

  {
    name: 'Sorrow\'s End',
    desc: 'The great warrior Dawnseeker succumbed to a wasting disease here. With her dying breath she commanded her people to build a city atop the ruins of an ancient colosseum visible upon the northern horizon.',
    coord: L.latLng(-99.1875, 80.125)
  },

  {
    name: 'Spire of Thousand Eyes',
    desc: 'Red smoke bellows from the volcano. Littered with pits of bubbling magma. Infested with glowing arachnid monstrosities. Rumoured to be the lair of an undead spider queen.',
    coord: L.latLng(-103.125, 68.25)
  },

  {
    name: 'Serpent Spines',
    desc: 'A formation of gigantic bone-like spikes jutting from the ground at a perpendicular angle. Plagued by hastening storms where time passes at a vastly accelerated rate for anything within.',
    coord: L.latLng(-99, 119.875)
  },

  {
    name: 'Petrified Forest',
    desc: 'A petried forest of trees from the ancient times, and the only reason why the Itheasi knows what a tree looks like. Believed to be the root of all lycanthropy illness of the world.',
    coord: L.latLng(-151.25, 162.25)
  },

  {
    name: 'Whispering Coast',
    desc: 'A shoreline haunted by shambling masked cadavers whispering about personal regrets. Draws vagrants away from Crasoa. It is said one of the Seven Inevitable Horrors -- the Mournavore -- lairs here.',
    coord: L.latLng(-68.4375, 74.1875)
  },

  {
    name: 'The Breach',
    desc: 'An tear in the fabric of reality into the realm of nightmares where unimaginable horrors dwell. Now a cursed place no Itheasi would dare encroach, lest they wish for a fate worse than death.',
    coord: L.latLng(-104.0625, 149.5)
  },

  {
    name: 'Abyssal Rift',
    desc: 'A deep, bottomless pit capped with a shimmering blue arcane seal. Believed to be the prison of a terrible being that predates even the gods. Pilgrimage spot for new initiates of the Viceron Watch',
    coord: L.latLng(-124.5, 142.6875)
  },

  {
    name: 'Balefire Peak',
    desc: 'A cursed volcano with a continuous stream of maga running down its eastern face that pools into a lava lake. Lair of the Obsidian Beast. Magic users lose their ability to think when they get close.',
    coord: L.latLng(-107.625, 102.0625)
  },

  {
    name: 'Crimson Sands',
    desc: 'Badlands stained red from an ancient war. Littered with corpses and cursed implements of war. Infested by giant flesh-eating scorpions. The only accessible source of the valuable Blood Iron ores.',
    coord: L.latLng(-82.625, 80)
  },

  {
    name: 'Last Lantern',
    desc: 'An abandoned cabin by the edge of the Petrified Forest. Guarded by animated suits of golden armour. Those who camp nearby will receive visions of a wish granting machine within the cabin.',
    coord: L.latLng(-137.875, 175.75)
  },

  {
    name: 'Dreadmarsh',
    desc: 'A foul smelling bog where the Raaki dump their surplus crops. Warm and humid due to underwater thermal vents. Faint drumming can be heard at the fringes of the bog.',
    coord: L.latLng(-169.25, 185.375)
  }
]

export const forts = [
  {
    name: 'Blackhaven',
    desc: 'A fortress outpost jointly funded by Crasoa, Gausk and Somar. Operated by the Sintharii Circle as a resupply point for their westbound caravans. Frequently besieged by cannibalistic raiders.',
    coord: L.latLng(-113, 74.5)
  },

  {
    name: 'Ravenhold',
    desc: 'A fortress outpost jointly funded by Morhas and Nekris. Operated by the Sintharii Circle as a central resupply point for their caravans. Home to many mercenary companies hoping for employment as caravan guards.',
    coord: L.latLng(-113.625, 154.625)
  },

  {
    name: 'Fool\'s Reach',
    desc: 'A fortress outpost funded by Telerea. Operated by the Sintharii Circle alongside the Maiden Singers - a secretive network of assassins and spies - who the Sintharii employ to ensure their monopoly on travel.',
    coord: L.latLng(-79, 144.125)
  },

  {
    name: 'Ith Narak',
    desc: 'A fortress outpost built by the Sintharii Circle. Heavily guarded by their elite militia - the Silver Shields. Situated atop an ancient silver mine that doubles as training grounds for the warriors.',
    coord: L.latLng(-120.875, 192.625)
  }
]