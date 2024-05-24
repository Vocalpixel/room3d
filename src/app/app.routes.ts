import {RouterModule, Routes} from '@angular/router';
import {RoomComponent} from "./pages/room/room.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: '', component: RoomComponent }
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'about', component: AboutComponent }
];
