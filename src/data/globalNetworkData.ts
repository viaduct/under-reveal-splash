export interface Location {
  id: string;
  name: string;
  x: number; // percentage position on map (0-100)
  y: number; // percentage position on map (0-100)
}

export interface Connection {
  from: string;
  to: string;
}

// Location coordinates are percentages based on the world map image
// x: 0% = left edge (~-170° longitude), 100% = right edge (~170° longitude)
// y: 0% = top edge (~80°N latitude), 100% = bottom edge (~60°S latitude)
export const locations: Location[] = [
  // Americas
  { id: "usa", name: "USA", x: 22.0, y: 37.5 },
  { id: "south-america", name: "South America", x: 31.2, y: 68.4 },

  // Europe
  { id: "europe", name: "Europe", x: 50.9, y: 36.3 },
  { id: "france", name: "France", x: 45.8, y: 38.6 },
  { id: "italy", name: "Italy", x: 49.0, y: 42.3 },

  // Middle East
  { id: "gcc", name: "GCC", x: 57.0, y: 32.0 },

  // Asia
  { id: "india", name: "India", x: 66.0, y: 56.1 },
  { id: "thailand", name: "Thailand", x: 71.8, y: 57.9 },
  { id: "vietnam", name: "Vietnam", x: 73.5, y: 58.4 },
  { id: "cambodia", name: "Cambodia", x: 72.5, y: 59.1 },
  { id: "malaysia", name: "Malaysia", x: 72.1, y: 63.6 },
  { id: "singapore", name: "Singapore", x: 72.2, y: 65.1 },
  { id: "indonesia", name: "Indonesia", x: 76.8, y: 66.7 },
  { id: "philippines", name: "Philippines", x: 77.2, y: 59.9 },
  { id: "hong-kong", name: "Hong Kong", x: 75.0, y: 53.2 },
  { id: "japan", name: "Japan", x: 81.4, y: 45.4 },
];

// Network connections between locations
export const connections: Connection[] = [
  // Americas connection
  { from: "usa", to: "south-america" },

  // Europe internal connections
  { from: "europe", to: "france" },
  { from: "france", to: "italy" },

  // Europe to Middle East/Asia
  { from: "italy", to: "gcc" },
  { from: "gcc", to: "india" },

  // Southeast Asia connections
  { from: "india", to: "thailand" },
  { from: "thailand", to: "cambodia" },
  { from: "thailand", to: "vietnam" },
  { from: "thailand", to: "malaysia" },
  { from: "malaysia", to: "singapore" },
  { from: "malaysia", to: "indonesia" },
  { from: "vietnam", to: "philippines" },
  { from: "vietnam", to: "hong-kong" },
  { from: "hong-kong", to: "japan" },

  // Trans-continental connections
  { from: "usa", to: "europe" },
  { from: "usa", to: "japan" },
];

// Helper function to get location by id
export const getLocationById = (id: string): Location | undefined =>
  locations.find((loc) => loc.id === id);
