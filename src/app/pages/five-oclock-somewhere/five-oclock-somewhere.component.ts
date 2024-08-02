import { Component, OnInit } from '@angular/core';
import { Zone } from '../../zone';
import { ZoneService } from '../../zone.service';

@Component({
  selector: 'app-five-oclock-somewhere',
  templateUrl: './five-oclock-somewhere.component.html',
  styleUrls: ['./five-oclock-somewhere.component.css']
})
export class FiveOclockSomewhereComponent implements OnInit {
  zones: Zone[] = [];
  fivePmZones: Zone[] = [];

  constructor(private zoneService: ZoneService) {}

  ngOnInit() {
    this.generateZones();
    this.fivePmZones.forEach(zone => {
      console.log(zone.city + "," + zone.state + "," + zone.country);
    })
  }

  generateZones() {
    this.zoneService.getZones().subscribe(data => {
      this.zones = data;
      this.fivePmZones = this.zones.filter(zone => this.isFivePM(zone.zone));
    });
  }

  isFivePM(timezone: string): boolean {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      timeZone: timezone,
      hour: '2-digit',
      hour12: false,
    };
    const hour = new Intl.DateTimeFormat('en-US', options).format(date);
    return hour === '17';
  }
}