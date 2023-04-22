import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SideBarViewComponent } from './layouts/side-bar-view/side-bar-view.component';
import { DummyComponent } from './core/dummy/dummy.component';

@NgModule({
  declarations: [AppComponent, SideBarViewComponent, DummyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SideBarViewComponent],
})
export class AppModule {}
