import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaPedidoComponent } from './tela-pedido/tela-pedido.component';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    TelaCardapioComponent,
    TelaPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
