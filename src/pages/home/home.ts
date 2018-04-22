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
  marker: any;
  constructor(public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
    this.locate();
    this.addTestBuildings();

  }

  locate() {
      let myIcon = leaflet.icon({
          iconUrl: 'assets/imgs/location.png',
          iconSize: [40, 40],

      })
      let markerGroup = leaflet.featureGroup();
      this.marker = leaflet.marker([0, 0], {icon: myIcon}).on('click', () => {
        alert('Uwe moeke is een plopkoek');
      })
      markerGroup.addLayer(this.marker);

      this.map.locate({
        setView: true,
        maxZoom: 20,
      }).on('locationfound', (e) => {
        
        this.marker.setLatLng([e.latitude, e.longitude])
        
        this.map.addLayer(markerGroup);
        }).on('locationerror', (err) => {
          alert(err.message);
      })
  } 
 
  locate_second() {
    this.map.locate({
        maxZoom: 20,
        watch: true
      }).on('locationfound', (e) => {
        
        this.marker.setLatLng([e.latitude, e.longitude])
        
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

  addTestBuildings() {
    let buildingList = [
      {
        short: "Leeuw",
        name: "Academie Minerva voor Popcultuur",
        adress: "Achter den Hoven 23",
        stad: "Leeuwarden",
        postcode: "8933AG",
        latitude: 53.198470, 
        longitude: 5.801517
      },
      {
        short: "AKKE",
        name: "Dansacademie Lucia Marthas",
        adress: "Akkerstraat 97",
        stad: "Groningen",
        postcode: "9717KZ",
        latitude: 53.227584, 
        longitude: 6.557653
      },
      {
        short: "ACLO",
        name: "Sportcentrum ACLO",
        adres: "Blauwborgje 16",
        stad: "Groningen",
        postcode: "9747AC",
        latitude: 53.237011, 
        longitude: 6.531347
      },
      {
        short: "GEZU",
        name: "Academie Minerva / Gedempte Zuiderdiep",
        adres: "Gedempte Zuiderdiep 158",
        stad: "Groningen",
        postcode: "9711HN",
        latitude: 53.214822, 
        longitude: 6.561535
      },
      {
        short: "ASSE",
        name: "Institute of Engineering",
        adres: "Industrieweg 34a",
        stad: "Assen",
        postcode: "9403AB",
        latitude: 53.004668, 
        longitude: 6.570962
      },
      {
        short: "MEER",
        name: "Meerwold",
        adres: "Laan Corpus den Hoorn 300",
        stad: "Groningen",
        postcode: "9728JT",
        latitude: 53.187945, 
        longitude: 6.564075
      },
      {
        short: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        adres: "Praediniussingel 59",
        stad: "Groningen",
        postcode: "9711AG",
        latitude: 53.215060, 
        longitude: 6.559787
      },
      {
        short: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        adres: "Praediniussingel 60",
        stad: "Groningen",
        postcode: "9711AG",
        latitude: 53.213210, 
        longitude: 6.561327
      },
      {
        short: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        adres: "Praediniussingel 61",
        stad: "Groningen",
        postcode: "9711AG",
        latitude: 53.214861, 
        longitude: 6.559727
      },
      {
        short: "RADE",
        name: "Singelhuis",
        adres: "Radesingel 6",
        stad: "Groningen",
        postcode: "9711EJ",
        latitude: 53.215020, 
        longitude: 6.573407
      },
      {
        short: "",
        name: "Dependance Academie Minerva ",
        adres: "Ulgersmaweg 143",
        stad: "Groningen",
        postcode: "9731BR",
        latitude: 53.214818, 
        longitude: 6.561501
      },
      {
        short: "ZE02",
        name: "Stafbureau Personeel & Organisatie",
        adres: "Zernikepark 2",
        stad: "Groningen",
        postcode: "9747AN",
        latitude: 53.243304, 
        longitude: 6.533032
      },
      {
        short: "ZEPA",
        name: "Stafbureau Onderwijs & Onderzoek",
        adres: "Zernikepark 4",
        stad: "Groningen",
        postcode: "9747AN",
        latitude: 53.243682, 
        longitude: 6.533487
      },
      {
        short: "ZP11",
        name: "Van DoorenVeste",
        adres: "Zernikeplein 11",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.241246, 
        longitude: 6.532561
      },
      {
        short: "ZP17",
        name: "Willem-Alexander Sportcentrum",
        adres: "Zernikeplein 17",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.241779, 
        longitude: 6.534895
      },
      {
        short: "ZP23",
        name: "Marie KamphuisBorg",
        adres: "Zernikeplein 23",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.242011, 
        longitude: 6.536522
      },
      {
        short: "ZP07",
        name: "Van Olst Toren",
        adres: "Zernikeplein 7",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.240060, 
        longitude: 6.532027
      },
      {
        short: "ZUKU",
        name: "Academie van Bouwkunst",
        adres: "Zuiderkuipen 19",
        stad: "Groningen",
        postcode: "9711HR",
        latitude: 53.215230, 
        longitude: 6.560876
      },
      {
        short: "VEEM",
        name: "Prins Claus Conservatorium",
        adres: "Meeuwerderweg 1",
        stad: "Groningen",
        postcode: "9724EM",
        latitude: 53.213985, 
        longitude: 6.577371
      },
      {
        short: "CHPE",
        name: "Wiebenga",
        adres: "Petrus Driessenstraat 3",
        stad: "Groningen",
        postcode: "9714CA",
        latitude: 53.227756, 
        longitude: 6.567727
      },
      {
        short: "ZL17",
        name: "EnTranCe",
        adres: "Zernikelaan 17",
        stad: "Groningen",
        postcode: "9747AA",
        latitude: 53.247686, 
        longitude: 6.530270
      },
      {
        short: "",
        name: "Logistiek Centrum",
        adres: "Zernikepark 2A",
        stad: "Groningen",
        postcode: "9747AN",
        latitude: 53.243499, 
        longitude: 6.532907
      },
      {
        short: "ZE06",
        name: "ZP 6-8",
        adres: "Zernikepark 6-8",
        stad: "Groningen",
        postcode: "9747AN",
        latitude: 53.243958, 
        longitude: 6.534651
      },
      {
        short: "",
        name: "P-gebouw",
        adres: "Zernikeplein 17 A",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.241317, 
        longitude: 6.534165
      },
      {
        short: "ZP09",
        name: "BrugsmaBorg",
        adres: "Zernikeplein 9",
        stad: "Groningen",
        postcode: "9747AS",
        latitude: 53.239976, 
        longitude: 6.532851
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