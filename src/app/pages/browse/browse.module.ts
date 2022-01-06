import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowseRoutingModule } from './browse-routing.module';
import { BrowseComponent } from './browse.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistsDetailsComponent } from './playlists-details/playlists-details.component';


@NgModule({
  declarations: [
    BrowseComponent,
    PlaylistsComponent,
    PlaylistsDetailsComponent
  ],
  imports: [
    CommonModule,
    BrowseRoutingModule
  ]
})
export class BrowseModule { }
