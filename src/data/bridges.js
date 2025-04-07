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
    id: 'golden-gate',
    name: 'Golden Gate Bridge',
    category: 'iconic',
    type: ['suspension'],
    continent: 'North America',
    country: 'USA',
    city: 'San Francisco',
    year: 1937,
    length: 2737,
    height: 227,
    image: '/images/iconic/golden_gate.jpg',
    gallery: [
      '/images/iconic/golden_gate_1.jpg',
      '/images/iconic/golden_gate_2.jpg',
      '/images/iconic/golden_gate_3.jpg',
    ],
    description: 'The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.',
  },
  {
    id: 'tower-bridge',
    name: 'Tower Bridge',
    category: 'historical',
    type: ['bascule', 'suspension'],
    continent: 'Europe',
    country: 'UK',
    city: 'London',
    year: 1894,
    length: 244,
    height: 65,
    image: '/images/historical/tower_bridge.jpg',
    gallery: [
      '/images/historical/tower_bridge_1.jpg',
      '/images/historical/tower_bridge_2.jpg',
      '/images/historical/tower_bridge_3.jpg',
    ],
    description: 'Tower Bridge is a combined bascule and suspension bridge in London, built between 1886 and 1894.',
  },
  {
    id: 'millau-viaduct',
    name: 'Millau Viaduct',
    category: 'modern',
    type: ['cable-stayed'],
    continent: 'Europe',
    country: 'France',
    city: 'Millau',
    year: 2004,
    length: 2460,
    height: 343,
    image: '/images/modern/millau.jpg',
    gallery: [
      '/images/modern/millau_1.jpg',
      '/images/modern/millau_2.jpg',
      '/images/modern/millau_3.jpg',
    ],
    description: 'The Millau Viaduct is a cable-stayed bridge that spans the valley of the River Tarn near Millau in southern France.',
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