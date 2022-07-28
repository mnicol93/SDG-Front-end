import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComarcasTotalComponent } from './components/comarcas-total/comarcas-total.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: ComarcasTotalComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
