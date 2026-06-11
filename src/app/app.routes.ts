import { Routes } from '@angular/router';
import { TrackList } from './track-list/track-list';
import { TrackDetail } from './track-detail/track-detail';
import { TrackForm } from './track-form/track-form';
import { Login } from './login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    {
        path: "",
        component: TrackList,
    },
    {
        path: "tracks/:id",
        component: TrackDetail,
    },
    {
        path: "add",
        component: TrackForm,
        canActivate: [authGuard],
    },
    {
        path: "login",
        component: Login,
    }
];
