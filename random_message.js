//set up pronouns and animals list
const pronouns = ['we','you']; 
const animals = ['Aardvark',
'African Elephant',
'African Tree Pangolin',
'Albatross',
'Alligator',
'Alpaca',
'Anaconda',
'Angel Fish',
'Ant',
'Anteater',
'Antelope',
'Archer Fish',
'Armadillo',
'Asian Elephant',
'Atlantic Puffin',
'Aye-Aye',
'Arab horse',
'Baboon',
'Badger',
'Bald Eagle',
'Bandicoot',
'Bangle Tiger',
'Barnacle',
'Barracuda',
'Basilisk',
'Bass',
'Basset Hound',
'Bat',
'Bearded Dragon',
'Beaver',
'Bee',
'Beetle',
'Beluga Whale',
'Bird',
'Big-horned sheep',
'Bird of paradise',
'Bison',
'Billy goat',
'Black Bear',
'Black Fly',
'Black Rhino',
'Black Footed Rhino',
'Black Widow Spider',
'Blackbird',
'Blowfish',
'Blue Jay',
'Blue Whale',
'Boa',
'Boar',
'Bob-Cat',
'Bonobo',
'Bottle-Nose dolphin',
'Bornean Orang-utan',
'Boxer dog',
'Brown Bear',
'Buck',
'Budgie',
'Buffalo',
'Bull',
'Bull frog',
'Bull Mastiff',
'Butterfly',
'Buzzard',
'Border Collie',
'Caribou',
'Cheetah',
'Common Dolphin',
'Common seal',
'Caiman lizard',
'Camel',
'Canary',
'Carp',
'Cat',
'Caterpillar',
'Cattle',
'Catfish',
'Chameleon',
'Centipede',
'Chicken',
'Chimpanzee',
'Chihuahua',
'Chinchilla',
'Chipmunk',
'Clam',
'Chupacabra',
'Clown Fish',
'Cobra',
'Cocker Spaniel',
'Cockatiel',
'Cockatoo',
'Cockroach',
'Cod',
'Coho',
'Corn Snake',
'Cougar',
'Cow',
'Coyote',
'Crab',
'Crane',
'Crawfish',
'Cray fish',
'Cricket',
'Crocodile',
'Crow',
'Cuckoo bird',
'Cuttle fish',
'Deer',
'Dog',
'Du-gong',
'Dalmation',
'Dacshund',
'Damsel fly',
'Dart Frog',
'Devi Fish (Giant Sting ray)',
'Diamond back rattler',
'Dik-dik',
'Dingo',
'Dinosaur',
'Doberman Pinscher',
'Dodo bird',
'Dolphin',
'Dolly Varden',
'Donkey',
'Door mouse',
'Dormouse',
'Draft horse',
'Dove',
'Dragonfly',
'Drake',
'Duck',
'Duckbill Platypus',
'Dung beetle',
'Eurasian Lynx',
'Eagle',
'Earthworm',
'Earwig',
'Echidna',
'Eclectus',
'Eel',
'Egret',
'Elephant',
'Elephant Seal',
'Elk',
'Emu',
'Erne',
'Falcon',
'Finch',
'Fish',
'Firefly',
'Flamingo',
'Flatworm',
'Fly',
'Ferret',
'Fox',
'Fresh Water Crocodile',
'Frog',
'Galapagos Land Iguana',
'Galapagos Tortoise',
'Gazelle',
'Giant Anteater',
'Giant panda',
'Giraffe',
'Gnat',
'Goat',
'Goose',
'Gopher',
'Gorilla',
'Grasshopper',
'Green fly',
'Grey Whale',
'Great White Shark',
'Green poison dart frog',
'Green Sea Turtle',
'Groundhog',
'Hammerhead shark',
'Hare',
'Hawk',
'Hedgehog',
'Heron',
'Herring',
'Hippopotamus',
'Horse',
'Hyena',
'Hyrax',
'Irrawaddy Dolphin',
'Iguana',
'Iguanodon',
'Impala',
'Inchworm',
'Insect',
'Jellyfish',
'Jackal',
'Jackrabbit',
'Jaguar',
'June bug',
'Kangaroo',
'Killer Whale',
'King Cobra',
'Kingfisher',
'Koala',
'Komodo Dragon',
'Kookaburra',
'Krill',
'Lama',
'Lamb',
'Lancelet',
'Leatherback sea turtle',
'Leech',
'Lemming',
'Lemur',
'Leopard',
'Lice',
'Lion',
'Lionfish',
'Llama',
'Lobster',
'Lynx',
'Manatee',
'Man-Of-War',
'Mantis',
'Marmot',
'Marsupials',
'Meerkat',
'Mink',
'Mole',
'Mollusks',
'Monarch Butterfly',
'Mongoose',
'Monkey',
'Moose',
'Mountain Lion',
'Mouse',
'Mule',
'Muskox',
'Muskrat',
'Naked Mole Rat',
'Narwhal',
'Nautilus',
'Newt',
'Ocelot',
'Octopus',
'Opossum',
'Orangutan',
'Orca',
'Osprey',
'Ostrich',
'Otter',
'Owl',
'Ox',
'Panda',
'Panther',
'Peacock',
'Pelican',
'Penguin',
'Pig',
'Pigeon',
'Platypus',
'Polar Bear',
'Porcupine',
'Praying Mantis',
'Prawn',
'Puma',
'Quail',
'Quetzal',
'Rabbit',
'Raccoon',
'Rat',
'Ray',
'Reindeer',
'Rhino',
'Ringworm',
'Rhinoceros',
'Robin',
'Rooster',
'Roundworm',
'Salmon',
'Salt water alligator',
'Sandpiper',
'Seahorse',
'Seal',
'Sea anemone',
'Sea Lion',
'Sea urchin',
'Scallop',
'Scorpion',
'Shark',
'Sheep',
'Shrimp',
'Siberian Husky',
'Siberian Tiger',
'Skunks',
'Slender Loris',
'Sloth',
'Sloth bear',
'Slugs',
'Snails',
'Snake',
'Snow Hare',
'Snow Fox',
'Snow Leopard',
'Somali Wild Ass',
'Sponge',
'Spectacled Bear',
'Squid',
'Squirrel',
'Starfish',
'Stork',
'Swan',
'Swordfish',
'Tapir',
'Tasmanian Devil',
'Tiger',
'Tadpole',
'Tamarin',
'Tapeworm',
'Tarantula',
'Tarpan',
'Tazmanian devil',
'Tazmanian tiger',
'Terrapin',
'Tick',
'Tiger shark',
'Tortoise',
'Trout',
'Turkey',
'Turtle',
'Uakari',
'Umbrella bird',
'Urchin',
'Urutu',
'Vicuna',
'Viper',
'Vulture',
'Vampire bat',
'Velociraptor',
'Vole',
'Viper Fish',
'Velvet worm',
'Vervet',
'Walrus',
'Warbler',
'Warthog',
'Wasp',
'Water Buffalo',
'Water Dragons',
'Wallaby',
'Whale',
'Whale Shark',
'White Rhino',
'Whippet',
'White tailed dear',
'Whooper',
'Whooping Crane',
'Weasel',
'Weevil',
'Wolf',
'Wolf Spider',
'Wolverine',
'Woodchuck',
'Woodpecker',
'Widow Spider',
'Wren',
'Wombat',
'Wildcat',
'Wildebeest',
'X-ray fish',
'Yak',
'Yellow Bellied Marmot',
'Yellow belly sapsucker',
'Yellow finned tuna',
'Yeti',
'Yorkshire terrier',
'Zander',
'Zebra',
'Zebra Finch',
'Zebra Dove',
'Zorilla',
'Zebu']

const word = 'word'

const random_animal = () => {
    return animals[Math.floor(Math.random() * animals.length)];
}

const random_pronoun = () => {
    return pronouns[Math.floor(Math.random() * pronouns.length)]
}

const random_messages = () => {
    return `${random_pronoun()} are a ${random_animal()} in a world filled with ${random_animal()}`
}

console.log(random_messages())

