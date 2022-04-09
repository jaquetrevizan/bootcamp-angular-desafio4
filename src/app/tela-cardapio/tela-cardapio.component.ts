import { Component, OnInit } from '@angular/core';
import { IProduto } from '../iproduto';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-tela-cardapio',
  templateUrl: './tela-cardapio.component.html',
  styleUrls: ['./tela-cardapio.component.css']
})
export class TelaCardapioComponent implements OnInit {

  produtos: IProduto[] = []

  constructor(public pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.pedidoService.carregaCardapio().subscribe(produtos => {
      this.produtos = produtos
    })
  }

}
