import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CalendarComponent } from 'ionic2-calendar';
import locale from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';

declare var google;

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  map = null;
  @ViewChild('mapElement') mapElement;
  public folder: string;
  rootPage:any = 'TabsPage';
  
  // calendar shit
  eventSource = []; 
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date()
  }
  selectedDate = new Date();

  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  // calendar shit
  
  constructor(private activatedRoute: ActivatedRoute, private db: AngularFirestore) {
    this.db.collection(`events`).snapshotChanges().subscribe(colSnap => {
      this.eventSource = [];
      colSnap.forEach(snap => {
        let event:any = snap.payload.doc.data();
        event.id = snap.payload.doc['id'];
        this.eventSource.push(event);
      });
    });
  }

  ngOnInit() {
    registerLocaleData(locale);
    this.loadMap();
  }

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

  // calendar events

  onViewTitleChanged(title) {
    console.log(title);
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
      (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  addNewEvent() {
    let now = new Date();
    let end = new Date();
    end.setMinutes(end.getMinutes() + 60);
    let event = {
    title: 'Event #' + now.getMinutes(), 
    startTime: now,
    endTime: end,
    allDay: true
    }
    console.log(event);
    this.db.collection(`events`).add(event);
  }
}
