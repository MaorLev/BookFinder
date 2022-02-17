import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBannerComponent } from './search-banner/search-banner.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBannerComponent],
  imports: [CommonModule, PagesModule, FormsModule],
  exports: [SearchBannerComponent],
})
export class SharedModule { }
