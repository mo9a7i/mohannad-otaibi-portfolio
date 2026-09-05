'use client'

import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet'
import { LatLngBounds } from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { places } from '@/lib/places'

const AMBER = '#e0a24c'
const MUTED = '#8c98a8'

export default function PlacesMap() {
  const bounds = new LatLngBounds(places.map((p) => [p.lat, p.lng] as [number, number]))

  return (
    <MapContainer
      bounds={bounds}
      boundsOptions={{ padding: [40, 40] }}
      scrollWheelZoom={false}
      worldCopyJump
      className="h-[420px] w-full rounded-lg [&_.leaflet-container]:bg-transparent"
      style={{ background: 'transparent' }}
    >
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
      />
      {places.map((p) => {
        const home = Boolean(p.home)
        return (
          <CircleMarker
            key={`${p.name}-${p.lat}`}
            center={[p.lat, p.lng]}
            radius={home ? 8 : 5}
            pathOptions={{
              color: home ? AMBER : MUTED,
              fillColor: home ? AMBER : MUTED,
              fillOpacity: home ? 0.9 : 0.55,
              weight: home ? 2 : 1,
            }}
          >
            <Tooltip direction="top" offset={[0, -4]}>
              <span className="font-mono text-xs">
                {p.name}, {p.country}
                {p.note ? ` — ${p.note}` : ''}
              </span>
            </Tooltip>
          </CircleMarker>
        )
      })}
    </MapContainer>
  )
}
