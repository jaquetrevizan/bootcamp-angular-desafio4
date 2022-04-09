import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TelaCardapioComponent } from './tela-cardapio/tela-cardapio.component';
import { TelaPedidoComponent } from './tela-pedido/tela-pedido.component';

const routes: Routes = [
  { path: 'cardapio', component: TelaCardapioComponent },
  { path: 'pedido', component: TelaPedidoComponent },
  { path: '', redirectTo: 'cardapio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
