
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AlertifyService } from '../_services/alertify.service';
import { catchError } from 'rxjs/operators';
import { SocietyruleService } from '../_services/societyrule.service';
import { Societyrule } from '../_models/societyrule';


@Injectable()
export class SocietyruleListResolver implements Resolve<Societyrule[]> {


    constructor(private societyRuleService: SocietyruleService, private router: Router, private alertify: AlertifyService) { }


    resolve(route: ActivatedRouteSnapshot): Observable<Societyrule[]> {

        return this.societyRuleService.getSocietyRules().pipe(catchError(error => {
            this.alertify.error(error);
            this.router.navigate(['/members']);
            return of(null);
        }));

    }
}
