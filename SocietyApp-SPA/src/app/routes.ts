import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { NoticeboardListComponent } from './noticeboard/noticeboard-list/noticeboard-list.component';
import { InformationComponent } from './information/information.component';
import { AuthGuard } from './_gaurds/auth.guard';
import { SocietyeventListComponent } from './societyevents/societyevent-list/societyevent-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { NoticeboardListResolver } from './_resolvers/noticeboard-list.resolver';
import { SocietyeventListResolver } from './_resolvers/societyevent-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_gaurds/prevent-unsaved-changes.guard';
import { SocietyruleListComponent } from './societyrules/societyrule-list/societyrule-list.component';
import { SocietyruleListResolver } from './_resolvers/societyrule-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },

    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: { users: MemberListResolver } },
            { path: 'members/:id', component: MemberDetailComponent, resolve: { user: MemberDetailResolver } },
            {
                path: 'member/edit', component: MemberEditComponent, resolve: { user: MemberEditResolver },
                canDeactivate: [PreventUnsavedChanges]
            },
            { path: 'noticeboard', component: NoticeboardListComponent, resolve: { noticeboards: NoticeboardListResolver }},
            { path: 'information', component: InformationComponent },
            { path: 'events', component: SocietyeventListComponent, resolve: { societyevents: SocietyeventListResolver } },
            { path: 'societyrules', component: SocietyruleListComponent, resolve: { societyrules: SocietyruleListResolver } },
        ]
    },

    { path: '**', redirectTo: '', pathMatch: 'full' },

];
