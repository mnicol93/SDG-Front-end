// Angular utilities
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Highcharts
import { HighchartsChartModule } from 'highcharts-angular';
// Navbar
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { ChartComponent } from './components/chart/chart.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { ComarcasTotalComponent } from './components/comarcas-total/comarcas-total.component';
import { ComarcasMasculinoComponent } from './components/comarcas-masculino/comarcas-masculino.component';
import { ComarcasFemeninoComponent } from './components/comarcas-femenino/comarcas-femenino.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainViewComponent,
    ChartComponent,
    NavbarComponent,
    NotFoundComponent,
    ComarcasTotalComponent,
    ComarcasMasculinoComponent,
    ComarcasFemeninoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
