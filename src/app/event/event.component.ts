import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';




interface Function {
  name: string,
}

interface Venue {
  venue: string,
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  sidebarTitle: string = "Services";
  navigationArray = [
    { 'menulink': '#decoration', 'menuname': 'Decoration' },
    { 'menulink': '#Photo/Vedio', 'menuname': 'Photo/Video' },
    { 'menulink': '#Catering', 'menuname': 'Catering' },
    { 'menulink': '#MusicDJ', 'menuname': 'Music DJ' },
    { 'menulink': '#Makeup', 'menuname': 'Make up' },
    { 'menulink': '#Gift', 'menuname': 'Gift' },
    { 'menulink': '#Cake', 'menuname': 'Cake' },
    { 'menulink': '#Kidsgames', 'menuname': 'Kids Games' },
  ]



  selectFunction: Function;
  items: SelectItem[];
  functions: Function[];
  selectVenue: Venue;
  venue: Venue[];
  date: Date;
  companyname: string;
  representativename: string;
  mobile: number;



  constructor() {
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    }

    this.functions = [
      { name: '1' },
      { name: '2' },
      { name: '3' },
      { name: '4' },
      { name: '5' }
    ];

    this.venue = [
      { venue: '1' },
      { venue: '2' },
      { venue: '3' },
      { venue: '4' },
      { venue: '5' }
    ];
  }

  ngOnInit(): void {
  }

}
