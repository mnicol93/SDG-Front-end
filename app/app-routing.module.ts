import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComarcasTotalComponent } from './components/comarcas-total/comarcas-total.component';
import { ComarcasFemeninoComponent } from './components/comarcas-femenino/comarcas-femenino.component';
import { ComarcasMasculinoComponent } from './components/comarcas-masculino/comarcas-masculino.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: ComarcasTotalComponent },
  { path: 'masculino', component: ComarcasMasculinoComponent },
  { path: 'femenino', component: ComarcasFemeninoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
