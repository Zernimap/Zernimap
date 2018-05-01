import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import L from 'leaflet';

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
      let myIcon = L.icon({
          iconUrl: 'assets/imgs/location.png',
          iconSize: [40, 40],
      })
      let markerGroup = L.featureGroup();
      this.marker = L.marker([0, 0], {icon: myIcon}).on('click', () => {
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
    this.map = L.map("map").fitWorld();
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
 
  }

  addTestBuildings() {
    let hanzeBuildingList = [
      {
        shortcode: "Leeuw",
        name: "Academie Minerva voor Popcultuur",
        address: "Achter den Hoven 23",
        city: "Leeuwarden",
        postalcode: "8933AG",
        latitude: 53.198470, 
        longitude: 5.801517
      },
      {
        shortcode: "AKKE",
        name: "Dansacademie Lucia Marthas",
        address: "Akkerstraat 97",
        city: "Groningen",
        postalcode: "9717KZ",
        latitude: 53.227584, 
        longitude: 6.557653
      },
      {
        shortcode: "ACLO / 5211", // TODO
        name: "Sportcentrum ACLO - Sports Centre",
        address: "Blauwborgje 16",
        city: "Groningen",
        postalcode: "9747AC",
        latitude: 53.237011, 
        longitude: 6.531347
      },
      {
        shortcode: "GEZU",
        name: "Academie Minerva / Gedempte Zuiderdiep",
        address: "Gedempte Zuiderdiep 158",
        city: "Groningen",
        postalcode: "9711HN",
        latitude: 53.214822, 
        longitude: 6.561535
      },
      {
        shortcode: "ASSE",
        name: "Institute of Engineering",
        address: "Industrieweg 34a",
        city: "Assen",
        postalcode: "9403AB",
        latitude: 53.004668, 
        longitude: 6.570962
      },
      {
        shortcode: "MEER",
        name: "Meerwold",
        address: "Laan Corpus den Hoorn 300",
        city: "Groningen",
        postalcode: "9728JT",
        latitude: 53.187945, 
        longitude: 6.564075
      },
      {
        shortcode: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        address: "Praediniussingel 59",
        city: "Groningen",
        postalcode: "9711AG",
        latitude: 53.215060, 
        longitude: 6.559787
      },
      {
        shortcode: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        address: "Praediniussingel 60",
        city: "Groningen",
        postalcode: "9711AG",
        latitude: 53.213210, 
        longitude: 6.561327
      },
      {
        shortcode: "PRAE",
        name: "Academie Minerva / Praediniussingel",
        address: "Praediniussingel 61",
        city: "Groningen",
        postalcode: "9711AG",
        latitude: 53.214861, 
        longitude: 6.559727
      },
      {
        shortcode: "RADE",
        name: "Singelhuis",
        address: "Radesingel 6",
        city: "Groningen",
        postalcode: "9711EJ",
        latitude: 53.215020, 
        longitude: 6.573407
      },
      {
        shortcode: "",
        name: "Dependance Academie Minerva ",
        address: "Ulgersmaweg 143",
        city: "Groningen",
        postalcode: "9731BR",
        latitude: 53.214818, 
        longitude: 6.561501
      },
      {
        shortcode: "ZE02",
        name: "Stafbureau Personeel & Organisatie",
        address: "Zernikepark 2",
        city: "Groningen",
        postalcode: "9747AN",
        latitude: 53.243304, 
        longitude: 6.533032
      },
      {
        shortcode: "ZEPA",
        name: "Stafbureau Onderwijs & Onderzoek",
        address: "Zernikepark 4",
        city: "Groningen",
        postalcode: "9747AN",
        latitude: 53.243682, 
        longitude: 6.533487
      },
      {
        shortcode: "ZP11",
        name: "Van DoorenVeste",
        address: "Zernikeplein 11",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.241246, 
        longitude: 6.532561
      },
      {
        shortcode: "ZP17",
        name: "Willem-Alexander Sportcentrum",
        address: "Zernikeplein 17",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.241779, 
        longitude: 6.534895
      },
      {
        shortcode: "ZP23",
        name: "Marie KamphuisBorg",
        address: "Zernikeplein 23",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.242011, 
        longitude: 6.536522
      },
      {
        shortcode: "ZP07",
        name: "Van Olst Toren",
        address: "Zernikeplein 7",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.240060, 
        longitude: 6.532027
      },
      {
        shortcode: "ZUKU",
        name: "Academie van Bouwkunst",
        address: "Zuiderkuipen 19",
        city: "Groningen",
        postalcode: "9711HR",
        latitude: 53.215230, 
        longitude: 6.560876
      },
      {
        shortcode: "VEEM",
        name: "Prins Claus Conservatorium",
        address: "Meeuwerderweg 1",
        city: "Groningen",
        postalcode: "9724EM",
        latitude: 53.213985, 
        longitude: 6.577371
      },
      {
        shortcode: "CHPE",
        name: "Wiebenga",
        address: "Petrus Driessenstraat 3",
        city: "Groningen",
        postalcode: "9714CA",
        latitude: 53.227756, 
        longitude: 6.567727
      },
      {
        shortcode: "ZL17",
        name: "EnTranCe",
        address: "Zernikelaan 17",
        city: "Groningen",
        postalcode: "9747AA",
        latitude: 53.247686, 
        longitude: 6.530270
      },
      {
        shortcode: "", // TODO
        name: "Logistiek Centrum",
        address: "Zernikepark 2A",
        city: "Groningen",
        postalcode: "9747AN",
        latitude: 53.243499, 
        longitude: 6.532907
      },
      {
        shortcode: "ZE06",
        name: "ZP 6-8",
        address: "Zernikepark 6-8",
        city: "Groningen",
        postalcode: "9747AN",
        latitude: 53.243958, 
        longitude: 6.534651
      },
      {
        shortcode: "", // TODO
        name: "P-gebouw",
        address: "Zernikeplein 17 A",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.241317, 
        longitude: 6.534165
      },
      {
        shortcode: "ZP09",
        name: "BrugsmaBorg",
        address: "Zernikeplein 9",
        city: "Groningen",
        postalcode: "9747AS",
        latitude: 53.239976, 
        longitude: 6.532851
      }
    ];

    let hanzeIcon = L.icon({
      iconUrl: 'assets/imgs/marker-hanze.png',
      iconSize: [25, 41],
    })

    let hanzeBuildings = L.featureGroup();
    for (let building of hanzeBuildingList) {
      let marker: any = L.marker([building.latitude, building.longitude], {icon: hanzeIcon}).on('click', () => {
        L.popup()
          .setLatLng([building.latitude, building.longitude])
          .setContent("<h1>"+building.name+"</h1> <p>shortcode: "+building.shortcode+"</p> <p>address: "+building.address+" "+building.postalcode+" "+building.city+"</p>")
          .openOn(this.map);      
        })
      hanzeBuildings.addLayer(marker);
    }
    this.map.addLayer(hanzeBuildings);



    let rugBuildingList = [
      {
        shortcode: "1111 / 1112", // TODO
        name: "Academic building",
        address: "Broerstraat 5",
        city: "Groningen",
        postalcode: "9712CP",
        latitude: 53.219295, 
        longitude: 6.563112
      },

// TODO ADD MORE HERE
// 1113	O Kijk in t Jatstraat 41/41a	Administrative Information Provision (AIV)	
// 1114	O Kijk in t Jatstraat 39	University shop/student societies/Admissions department	University shop
// 1121	Oude Boteringestraat 44	Office of the University	Administration building and Office of the University
// 1124	Oude Boteringestraat 38	Faculty of Theology and Religious studies	
// 1126	Oude Boteringestraat 34	Faculty of Arts, HOVO	
// 1131	Oude Boteringestraat 52	Faculty of Philosophy	
// 1134	Broerstraat 9	Archeology (Arts)	
// 1211	Broerstraat 4	Library	
// 1212	Poststraat 6	Archeology (Arts)	
// 1213 / 1219	O Kijk in t Jatstraat 7a	University museum	
// 1214	O Kijk in t Jatstraat 5/7	Legal theory (Law)	
// 1215	O Kijk in t Jatstraat 9	Faculty of Law, Legal Theory	
// 1311 / 1312 / 1313 / 1314 / 1315	O Kijk in t Jatstraat 26	Arts/Law/Language centre	Harmoniecomplex
// 1321	O Kijk in t Jatstraat 28	Editorial office UK (university newspaper)	
// 1323	Turftorenstraat 21	Faculty of Law, Legal History and Legal Methods, and DOS	
// 1324	Kleine Kromme Elleboog 7b	University hotel	University hotel
// 1325	Uurwerkersgang 10	student counsellors, psychological counsellors, Study support	
// 2111	Grote Rozenstraat 38	Pedagogy, Special Needs Education and Youth Care (GMW)	Nieuwenhuis building
// 2211 / 2213	Grote Kruisstraat 2/1	Psychology (GMW)	Heymans building
// 2212	Grote Kruisstraat 2/1	Teacher Education / Lecture rooms (GMW)	Munting building
// 2221	Grote Rozenstraat 1	Sociology (GMW)	Bouman building
// 2222	Grote Rozenstraat 17	Sociology  / Lecture rooms (GMW)	Gadourek building
// 2223	Grote Rozenstraat 15	Faculty Office (GMW)	Snijders building
// 2224	Grote Rozenstraat 3	Educational Sciences / GION (GMW)	Van Gelder building
// 2231	N Kijk in t Jatstraat 68/70	Sustainable Society	Jantina Tammes house
// 3111	Antonius Deusinglaan 2	Medical Sciences (MRI center and Neuroimaging center)	
// 3126	Bloemsingel 1	Lifelines	
// 3211	Antonius Deusinglaan 1		MWF complex (UMCG)
// 4122 / 4123	Bloemsingel 36/36a	Lecture rooms Faculty of Behavioural and Social Sciences	
// 4321	Pelsterstraat 23	Student facilities + KEI	Pelsterpand
// 4335	A-weg 30	Arctic Centre (Arts)	
// 4336	Munnikeholm 10		USVA cultural student centre
// 4345	Hoendiepskade 23/24	University College Groningen	
// 4411	Visserstraat 47/49	Health, Safety and Environment Service/Confidential advisor	
// 4429	Oude Boteringestraat 23	Faculty of Arts	
// 4432	Oude Boteringestraat 19		Van Swinderen Huys
// 4433	Oude Boteringestraat 13	Studium Generale	
// 5111 / 5112 / 5113 / 5114 / 5115 / 5116 / 5117 / 5118	Nijenborgh 4	Physics, Chemistry, Industrial Engineering and Management (FSE)	Nijenborgh
// 5143	Zernikelaan 1	Security	Porters lodge

      {
        shortcode: "5161",
        name: "Faculty board and general offices (FSE), Mathematics, Computing Science, and Artificial Intelligence	Bernoulliborg",
        address: "Nijenborgh 9",
        city: "Groningen",
        postalcode: "9747AG",
        latitude: 53.240492, 
        longitude: 6.536288
      },
      {
        shortcode: "5158 / 5159", // TODO klopt dit wel ???
        name: "Energy Academy Europa	Energy Academy Europa",
        address: "Nijenborgh 6",
        city: "Groningen",
        postalcode: "9747AG",
        latitude: 53.240049,
        longitude: 6.537797
      },
      {
        shortcode: "5171 / 5172 / 5173", // TODO
        name: "Biology, Life Sciences and Technology (FSE)	Linnaeusborg",
        address: "Nijenborgh 7",
        city: "Groningen",
        postalcode: "9747AG",
        latitude: 53.241308, 
        longitude: 6.538220
      },
      {
        shortcode: "5231",
        name: "Transportation Service",
        address: "Nadorstplein 2a",
        city: "Groningen",
        postalcode: "9747AB",
        latitude: 53.236571, 
        longitude: 6.533741
      },
      {
        shortcode: "5236 / 5256",
        name: "University Services Department",
        address: "Blauwborgje 8-10",
        city: "Groningen",
        postalcode: "9747AC",
        latitude: 53.237081, 
        longitude: 6.534684
      },
// TODO
// 5411	Nettelbosje 2	Faculty of Economics and Business Duisenberg building
// 5412	Nettelbosje 2	Lecture area	
// 5414	Nettelbosje 2	Student societies	
      {
        shortcode: "5415 / 5416 / 5417", // TODO
        name: "Faculty of Spatial Sciences, CIT, Teacher Education (GMW)",
        address: "Landleven 1",
        city: "Groningen",
        postalcode: "9747AD",
        latitude: 53.237768, 
        longitude: 6.534745
      },
      {
        shortcode: "5419",
        name: "Astronomy/Kapteyn Institute, SRON	Kapteynborg",
        address: "Landleven 12",
        city: "Groningen",
        postalcode: "9747AD",
        latitude: 53.239995, 
        longitude: 6.533877
      },
      {
        shortcode: "5431",
        name: "Centre for Information Technology (CIT)	Smitsborg",
        address: "Nettelbosje 1",
        city: "Groningen",
        postalcode: "9747AJ",
        latitude: 53.238136, 
        longitude: 6.536045
      },
      {
        shortcode: "5433",
        name: "Paviljon Duisenberg Building",
        address: "Nettelbosje 2",
        city: "Groningen",
        postalcode: "9747AJ",
        latitude: 53.239429, 
        longitude: 6.534604
      },
      {
        shortcode: "5711",
        name: "KVI",
        address: "Zernikelaan 25",
        city: "Groningen",
        postalcode: "9747AA",
        latitude: 53.249467, 
        longitude: 6.525755
      },
      {
        shortcode: "7112",
        name: "Behavioural biology	De Herdershut",
        address: "Heereweg 10 Schiermonnikoog",
        city: "Schiermonnikoog",
        postalcode: "9166SE",
        latitude: 53.478410, 
        longitude: 6.208321
      },
      {
        shortcode: "7421",
        name: "Faculty Fryslân",
        address: "Sophialaan 1",
        city: "Leeuwarden",
        postalcode: "8911AE",
        latitude: 53.19787, 
        longitude: 5.792877
      }

    ];

    let rugIcon = L.icon({
      iconUrl: 'assets/imgs/marker-rug.png',
      iconSize: [25, 41],
    })

    let rugBuildings = L.featureGroup();
    for (let building of rugBuildingList) {
      let marker: any = L.marker([building.latitude, building.longitude], {icon: rugIcon}).on('click', () => {
        L.popup()
          .setLatLng([building.latitude, building.longitude])
          .setContent("<h1>"+building.name+"</h1> <p>shortcode: "+building.shortcode+"</p> <p>address: "+building.address+" "+building.postalcode+" "+building.city+"</p>")
          .openOn(this.map);      
        })
      rugBuildings.addLayer(marker);
    }
    this.map.addLayer(rugBuildings);





    let examLocationList = [
      {
        shortcode: "5263", // TODO
        name: "Aletta Jacobshal",
        address: "Blauwborgje 4",
        city: "Groningen",
        postalcode: "9747AC",
        latitude: 53.236815,  
        longitude: 6.536249
      }
    ]

    let examIcon = L.icon({
      iconUrl: 'assets/imgs/marker-icon.png',
      iconSize: [25, 41],
    })

    let buildings = L.featureGroup();
    for (let building of examLocationList) {
      let marker: any = L.marker([building.latitude, building.longitude], {icon: examIcon}).on('click', () => {
        L.popup()
          .setLatLng([building.latitude, building.longitude])
          .setContent("<h1>"+building.name+"</h1> <p>shortcode: "+building.shortcode+"</p> <p>address: "+building.address+" "+building.postalcode+" "+building.city+"</p>")
          .openOn(this.map);      
        })
      buildings.addLayer(marker);
    }
    this.map.addLayer(buildings);

    // var imageUrl = 'assets/VanDorenVeste-1.jpg',
    // imageBounds = [[53.239976, 6.532851], [53.241317, 6.534165]];
    // L.imageOverlay(imageUrl, imageBounds).addTo(this.map);

  }
}