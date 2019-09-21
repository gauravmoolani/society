import { Component, OnInit } from '@angular/core';
import { SocietyeventService } from 'src/app/_services/societyevent.service';
import { Societyevent } from 'src/app/_models/societyevent';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-societyevent-list',
  templateUrl: './societyevent-list.component.html',
  styleUrls: ['./societyevent-list.component.css']
})
export class SocietyeventListComponent implements OnInit {
  societyevents: Societyevent[];
  constructor(private societyeventservice: SocietyeventService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.societyevents = data['societyevents'];
    });
    // this.loadSocietyEvents();
  }
  // loadSocietyEvents() {
  //   this.societyeventservice.getSocietyEvents().subscribe((societyevents: Societyevent[]) => {
  //     this.societyevents = societyevents;
  //   }, error => {
  //     this.alertify.message(error);
  //   });
  // }
}
