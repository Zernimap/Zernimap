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
    this.addTestBuildings();
  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert(e.latitude + " " + e.longitude);
      })
      markerGroup.addLayer(marker);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    })
 
  }

  addTestBuildings() {
    let buildingList = [
      {
        title: 'Van DoorenVeste',
        latitude: '53.241150',
        longitude: '6.532580'
      },
      {
        title: 'Van Olst Toren',
        latitude: '53.239852',
        longitude: '6.531444'
      },
      {
        title: 'Willem-Alexander Sportcentrum',
        latitude: '53.241808',
        longitude: '6.535021'
      }
    ];

    let rooms = leaflet.featureGroup();
    for (let building of buildingList) {
      let marker: any = leaflet.marker([building.latitude, building.longitude])
      rooms.addLayer(marker);
    }
    this.map.addLayer(rooms);
  }
 
}