import { FullComponent } from './layout/full/full.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'book-component',
        component: BookComponent,
      },
      {
        path: '',
        component: BookComponent,
      },
    ],
  },

  { path: '', redirectTo: '/full-component/book-component', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
