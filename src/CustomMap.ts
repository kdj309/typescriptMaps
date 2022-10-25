import maplibregl from "maplibre-gl";

export interface mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  private key: string = "j9S782O8n3qlLCaGmTUb";
  private customMap: maplibregl.Map;

  constructor(lng: string, lat: string, container: string) {
    this.customMap = new maplibregl.Map({
      container: container,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.key}`,
      center: [parseFloat(lng), parseFloat(lat)],
      zoom: 8,
    });
  }

  addMarker = function name(mapObj: mappable) {
    // console.log(mapObj.location);
    var marker = new maplibregl.Marker()
      .setLngLat([mapObj.location.lng, mapObj.location.lat])
      .setPopup(new maplibregl.Popup().setHTML(mapObj.markerContent()))
      .addTo(this.customMap);
  };
}
