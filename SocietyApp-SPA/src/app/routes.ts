import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { InformationComponent } from './information/information.component';
import { AuthGuard } from './_gaurds/auth.guard';
import { SocietyeventListComponent } from './societyevents/societyevent-list/societyevent-list.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent },
            { path: 'noticeboard', component: NoticeboardComponent },
            { path: 'information', component: InformationComponent },
            { path: 'events', component: SocietyeventListComponent },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
