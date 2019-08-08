import { Component, OnInit } from '@angular/core';
import { Noticeboard } from '../_models/noticeboard';
import { NoticeboardService } from '../_services/noticeboard.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-noticeboard',
  templateUrl: './noticeboard.component.html',
  styleUrls: ['./noticeboard.component.css']
})
export class NoticeboardComponent implements OnInit {
  noticeboards: Noticeboard[];
  constructor(private noticeboardservice: NoticeboardService, private alertify: AlertifyService) { }


  ngOnInit() {
    this.loadNoticeBoard();
  }
  loadNoticeBoard() {
    this.noticeboardservice.getNoticeboards().subscribe((noticeboards: Noticeboard[]) => {
      this.noticeboards = noticeboards;
    }, error => {
      this.alertify.message(error);
    });
  }
}
