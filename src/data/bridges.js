export const bridgeCategories = {
  historical: 'Historical Great Bridges',
  modern: 'Modern Great Bridges',
  iconic: 'Iconic Bridges',
  achievements: 'High-Level Achievements',
};

export const bridgeTypes = {
  longest: 'Longest Bridges',
  tallest: 'Tallest Bridges',
  highest: 'Highest Bridges',
  oldest: 'Oldest Bridges',
};

export const continents = [
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Africa',
  'Oceania',
];

export const bridges = [
  {
    id: 1,
    name: 'Golden Gate Bridge',
    category: 'iconic',
    type: ['longest', 'tallest'],
    continent: 'North America',
    country: 'United States',
    city: 'San Francisco',
    yearCompleted: 1937,
    length: '2,737 meters',
    height: '227 meters',
    description: 'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate strait, the one-mile-wide, three-mile-long channel between San Francisco Bay and the Pacific Ocean.',
    history: 'The bridge was designed by engineer Joseph Strauss and architect Irving Morrow. It was the longest and tallest suspension bridge in the world when it was completed in 1937.',
    image: '/images/bridges/golden-gate.jpg',
    gallery: [
      '/images/bridges/golden-gate-1.jpg',
      '/images/bridges/golden-gate-2.jpg',
      '/images/bridges/golden-gate-3.jpg',
    ],
    coordinates: {
      lat: 37.8199,
      lng: -122.4783,
    },
  },
  {
    id: 2,
    name: 'Tower Bridge',
    category: 'historical',
    type: ['iconic'],
    continent: 'Europe',
    country: 'United Kingdom',
    city: 'London',
    yearCompleted: 1894,
    length: '244 meters',
    height: '65 meters',
    description: 'Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894.',
    history: 'The bridge was designed by Sir Horace Jones and engineered by Sir John Wolfe Barry. It was built to ease road traffic while maintaining river access to the busy Pool of London docks.',
    image: '/images/bridges/tower-bridge.jpg',
    gallery: [
      '/images/bridges/tower-bridge-1.jpg',
      '/images/bridges/tower-bridge-2.jpg',
      '/images/bridges/tower-bridge-3.jpg',
    ],
    coordinates: {
      lat: 51.5055,
      lng: -0.0754,
    },
  },
  {
    id: 3,
    name: 'Millau Viaduct',
    category: 'modern',
    type: ['tallest', 'highest'],
    continent: 'Europe',
    country: 'France',
    city: 'Millau',
    yearCompleted: 2004,
    length: '2,460 meters',
    height: '343 meters',
    description: 'The Millau Viaduct is a cable-stayed bridge that spans the Tarn Valley near Millau in southern France.',
    history: 'Designed by the French engineer Michel Virlogeux and British architect Norman Foster, it was completed in 2004 and is the tallest bridge in the world.',
    image: '/images/bridges/millau-viaduct.jpg',
    gallery: [
      '/images/bridges/millau-viaduct-1.jpg',
      '/images/bridges/millau-viaduct-2.jpg',
      '/images/bridges/millau-viaduct-3.jpg',
    ],
    coordinates: {
      lat: 44.0833,
      lng: 3.0167,
    },
  },
  // Add more bridges here...
];

export const getBridgesByCategory = (category) => {
  return bridges.filter((bridge) => bridge.category === category);
};

export const getBridgesByType = (type) => {
  return bridges.filter((bridge) => bridge.type.includes(type));
};

export const getBridgesByContinent = (continent) => {
  return bridges.filter((bridge) => bridge.continent === continent);
};

export const getBridgeById = (id) => {
  return bridges.find((bridge) => bridge.id === id);
}; 