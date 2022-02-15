import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBannerComponent } from './search-banner/search-banner.component';

@NgModule({
  declarations: [SearchBannerComponent],
  imports: [CommonModule],
  exports: [SearchBannerComponent],
})
export class SharedModule {}
