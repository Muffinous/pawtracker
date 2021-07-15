import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  map = null;
  @ViewChild('mapElement') mapElement;
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadMap();
  }

  public appPages = [
    { title: 'My profile', url: '/folder/Inbox', icon: 'person' },
    { title: 'Buddies', url: '/folder/Outbox', icon: 'paw' },
    { title: 'Settings', url: '/folder/Favorites', icon: 'settings' },
    { title: 'Dark mode', url: '/folder/Archived', icon: 'toggle' },
    { title: 'Sign out', url: '/folder/Trash', icon: 'log-out' },
  ];

  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];  


  loadMap() {
    const mapEle: HTMLElement = document.getElementById('map');
    console.log(mapEle);
    const myLatLng = { lat: -34.397, lng: 150.644};
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
}
