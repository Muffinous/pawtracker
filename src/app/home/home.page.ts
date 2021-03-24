import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  public appPages = [
    { title: 'My profile', url: '/folder/Inbox', icon: 'person' },
    { title: 'Buddies', url: '/folder/Outbox', icon: 'paw' },
    { title: 'Settings', url: '/folder/Favorites', icon: 'settings' },
    { title: 'Dark mode', url: '/folder/Archived', icon: 'toggle' },
    { title: 'Sign out', url: '/folder/Trash', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];  
}
