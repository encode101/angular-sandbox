import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { SideBarViewComponent } from '../layouts/side-bar-view/side-bar-view.component';

const routes: Routes = [
  {
    path: '',
    component: SideBarViewComponent,
    children: [{ path: '', component: LandingScreenComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
