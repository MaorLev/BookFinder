import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layout/full/full.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, FullComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule, PagesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
