import { Component, OnInit } from '@angular/core';
import { Noticeboard } from '../../_models/noticeboard';
import { NoticeboardService } from '../../_services/noticeboard.service';
import { AlertifyService } from '../../_services/alertify.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticeboard-list',
  templateUrl: './noticeboard-list.component.html',
  styleUrls: ['./noticeboard-list.component.css']
})
export class NoticeboardListComponent implements OnInit {
  noticeboards: Noticeboard[];
  constructor(private noticeboardservice: NoticeboardService, private alertify: AlertifyService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.data.subscribe((data => {
      this.noticeboards = data['noticeboards'];
    }));
    // this.loadNoticeBoard();
  }
  // loadNoticeBoard() {
  //   this.noticeboardservice.getNoticeboards().subscribe((noticeboards: Noticeboard[]) => {
  //     this.noticeboards = noticeboards;
  //   }, error => {
  //     this.alertify.message(error);
  //   });
  // }
}
