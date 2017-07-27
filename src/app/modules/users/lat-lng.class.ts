export class LatLng {
  lat: string;
  lng: string;
  constructor(latLng: LatLngInterface){
    this.lat = latLng.lat;
    this.lng = latLng.lng;
  }
}

export interface LatLngInterface {
  lat: string;
  lng: string;
}
