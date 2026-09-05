// Places I've been to. Static pins — edit this list and the map updates.
// lat/lng in decimal degrees. `home: true` renders a highlighted marker.

export type Place = {
  name: string
  country: string
  lat: number
  lng: number
  home?: boolean
  note?: string
}

export const places: Place[] = [
  { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, home: true, note: 'Home base' },
  { name: 'Jeddah', country: 'Saudi Arabia', lat: 21.4858, lng: 39.1925 },
  { name: 'Mecca', country: 'Saudi Arabia', lat: 21.3891, lng: 39.8579 },
  { name: 'Medina', country: 'Saudi Arabia', lat: 24.5247, lng: 39.5692 },
  { name: 'Dammam', country: 'Saudi Arabia', lat: 26.4207, lng: 50.0888 },
  { name: 'Abha', country: 'Saudi Arabia', lat: 18.2465, lng: 42.5117 },
  { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708 },
  { name: 'Abu Dhabi', country: 'UAE', lat: 24.4539, lng: 54.3773 },
  { name: 'Manama', country: 'Bahrain', lat: 26.2285, lng: 50.586 },
  { name: 'Kuwait City', country: 'Kuwait', lat: 29.3759, lng: 47.9774 },
  { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.531 },
  { name: 'Muscat', country: 'Oman', lat: 23.588, lng: 58.3829 },
  { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357 },
  { name: 'Amman', country: 'Jordan', lat: 31.9454, lng: 35.9284 },
  { name: 'Istanbul', country: 'Türkiye', lat: 41.0082, lng: 28.9784 },
  { name: 'London', country: 'United Kingdom', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522 },
  { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.139, lng: 101.6869 },
  { name: 'Singapore', country: 'Singapore', lat: 1.3521, lng: 103.8198 },
]
