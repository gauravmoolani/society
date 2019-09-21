import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SocietyeventService } from '../_services/societyevent.service';
import { Societyevent } from '../_models/societyevent';

@Injectable()
export class SocietyeventListResolver implements Resolve<Societyevent[]> {

    constructor(private societyeventService: SocietyeventService, private router: Router, private alertify: AlertifyService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Societyevent[]> {
        return this.societyeventService.getSocietyEvents().pipe(catchError(error => {
            this.alertify.error('problem retriving data');
            this.router.navigate(['/members']);
            return of(null);
        }));

    }

}
