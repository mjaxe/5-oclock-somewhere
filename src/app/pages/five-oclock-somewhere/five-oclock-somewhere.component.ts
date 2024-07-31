import { Component } from '@angular/core';
import { Zone } from '../../zone';
import { ZoneService } from '../../zone.service';
@Component({
  selector: 'app-five-oclock-somewhere',
  templateUrl: './five-oclock-somewhere.component.html',
  styleUrl: './five-oclock-somewhere.component.css'
})
export class FiveOclockSomewhereComponent {

  constructor(private zoneService: ZoneService){}

  zones: Zone[] = [];

  ngOnInit(){
    this.generateZones();
    this.zones.forEach(zone => {
      console.log(zone.country);
    })
  }

  generateZones(){
    this.zoneService.getZones().subscribe(data => this.zones = data);
  }

}
