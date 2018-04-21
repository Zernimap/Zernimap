import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
    this.locate();
  }

  locate() {
      let myIcon = leaflet.icon({
          iconUrl: 'assets/imgs/location.png',
          iconSize: [40, 40],

      })
      let marker: any;
      let markerGroup = leaflet.featureGroup();
      marker = leaflet.marker([0, 0], {icon: myIcon}).on('click', () => {
        alert('Uwe moeke is een plopkoek');
      })
      markerGroup.addLayer(marker);

      this.map.locate({
        setView: true,
        maxZoom: 20,
        watch: true
      }).on('locationfound', (e) => {
        
        marker.setLatLng([e.latitude, e.longitude])
        
        this.map.addLayer(markerGroup);
        }).on('locationerror', (err) => {
          alert(err.message);
      })
  } 
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    
   }
 
}