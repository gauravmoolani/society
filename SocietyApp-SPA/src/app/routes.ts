import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { InformationComponent } from './information/information.component';
import { AuthGuard } from './_gaurds/auth.guard';

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
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
