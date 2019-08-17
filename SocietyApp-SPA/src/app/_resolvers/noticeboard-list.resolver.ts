import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Noticeboard } from '../_models/noticeboard';
import { NoticeboardService } from '../_services/noticeboard.service';

@Injectable()
export class NoticeboardListResolver implements Resolve<Noticeboard[]> {

    constructor(private noticeboardService: NoticeboardService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Noticeboard[]> {
        return this.noticeboardService.getNoticeboards().pipe(catchError(error => {
            this.alertify.error('problem retriving data');
            this.router.navigate(['/members']);
            return of(null);
        }));
    }

}
