import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-tela-pedido',
  templateUrl: './tela-pedido.component.html',
  styleUrls: ['./tela-pedido.component.css']
})
export class TelaPedidoComponent {

  constructor(public pedidoService: PedidoService) { }

}
