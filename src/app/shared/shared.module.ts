import { PagesModule } from './../pages/pages.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBannerComponent } from './search-banner/search-banner.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBannerComponent, PaginationComponent],
  imports: [CommonModule, PagesModule, FormsModule],
  exports: [SearchBannerComponent,
    PaginationComponent],
})
export class SharedModule { }
