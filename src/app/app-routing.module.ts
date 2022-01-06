import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { PlaylistsComponent } from './pages/browse/playlists/playlists.component';
import { PlaylistsDetailsComponent } from './pages/browse/playlists-details/playlists-details.component';
import { CreatePlaylistComponent } from './pages/manage/create-playlist/create-playlist.component';

const routes: Routes = [

  {
    path: '',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'playlists',
    component: PlaylistsComponent,
  },
  {
    path: 'playlists-details',
    component: PlaylistsDetailsComponent,
  },
  {
    path: 'create-playlists',
    component: CreatePlaylistComponent,
  },

  { path: 'browse', loadChildren: () => import('./pages/browse/browse.module').then(m => m.BrowseModule) },

  { path: 'manage', loadChildren: () => import('./pages/manage/manage.module').then(m => m.ManageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
