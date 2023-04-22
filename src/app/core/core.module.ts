import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LandingScreenComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
