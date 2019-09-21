import { Component, OnInit } from '@angular/core';
import { Societyrule } from 'src/app/_models/societyrule';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-societyrule-list',
  templateUrl: './societyrule-list.component.html',
  styleUrls: ['./societyrule-list.component.css']
})
export class SocietyruleListComponent implements OnInit {
  societyrules: Societyrule[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      this.societyrules = data['societyrules'];
    });
  }

}
