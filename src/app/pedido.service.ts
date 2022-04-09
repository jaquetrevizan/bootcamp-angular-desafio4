import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduto } from './iproduto';
import { IProdutoQuantidade } from './iproduto-quantidade';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  itens: IProdutoQuantidade[] = []

  constructor(private httpClient: HttpClient) { }

  carregaCardapio(): Observable<IProduto[]> {
    return this.httpClient.get<IProduto[]>('http://localhost:3000/cardapio')
  }

  adicionaProduto(produto: IProduto) {
    const item = this.itens.find(item => item.produto.descricao === produto.descricao)
    if(item) {
      item.quantidade++
    } else {
      this.itens.push({
        produto: produto,
        quantidade: 1
      })
    }
  }

  getQuantidade(): number {
    let quantidade = 0
    for (const item of this.itens) {
      quantidade += item.quantidade
    }
    return quantidade
  }

  getPrecoTotal(): number {
    let preco = 0
    for (const item of this.itens) {
      preco += item.produto.preco * item.quantidade
    }
    return preco
  }

  limpa() {
    this.itens = []
  }

}
