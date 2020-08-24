import { Component, OnInit } from "@angular/core";
import { Cliente } from "../model/cliente";
import { ClienteService } from "../service/clientes.service";
import { Router, NavigationExtras } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {
  ModalClienteComponent,
  ClienteEditado,
} from "src/app/shared/modalCliente/modal-cliente.component";

@Component({
  templateUrl: "./clientes-view.component.html",
  styleUrls: ["./clientes-view.component.css"],
})
export class ClientesViewComponent implements OnInit {
  _clientes: Cliente[] = [];

  clientesFiltrados: Cliente[] = [];

  _filterBy: string;

  constructor(
    public clienteService: ClienteService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.buscarClientes();
  }

  adicionarCliente() {
    const dialogRef = this.dialog.open(ModalClienteComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        let novoCliente = this.createCliente(result);

        this.salvarCliente(novoCliente);
      }
    });
  }

  buscarClientes() {
    this.clienteService.findAll().subscribe({
      next: (clientes) => {
        this._clientes = clientes;
        this.clientesFiltrados = this._clientes;
      },
      error: (err) => console.log("Error", err),
    });

    this.filtrar(this._filterBy);
  }

  createCliente(nomeCliente: string): Cliente {
    let novoCliente = new Cliente();
    novoCliente.nome = nomeCliente;
    novoCliente.isAtivo = true;

    return novoCliente;
  }

  deletarCliente(idCliente: number) {
    this.clienteService.deleteById(idCliente).subscribe({
      next: () => {
        console.log("Cliente deletado com sucesso");
        this.buscarClientes();
      },
      error: (err) => console.log("Error", err),
    });
  }

  editarCliente(cliente) {
    const config = {
      data: {
        titulo: "Editar Cliente!",
        nomeCliente: cliente.nome,
      } as ClienteEditado,
    };
    const dialogRef = this.dialog.open(ModalClienteComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        cliente.nome = result;
        this.salvarCliente(cliente);
      }
    });
  }
  filtrar(val: string) {
    this.clientesFiltrados = this._clientes;

    if (val && val.trim() != "") {
      val = val.toLowerCase();
      this.clientesFiltrados = this.clientesFiltrados.filter((value) => {
        return value.nome.toLowerCase().includes(val);
      });
    }
  }

  salvarCliente(clienteSalvo: Cliente) {
    clienteSalvo.isAtivo = true;
    this.clienteService.update(clienteSalvo).subscribe({
      next: () => {
        console.log("Cliente salvo com sucesso");
        this.buscarClientes();
      },
      error: (err) => console.log("Error", err),
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    if (this._filterBy == "") {
      this.clientesFiltrados = this._clientes;
    } else {
      this.filtrar(this._filterBy);
    }
  }

  get filter() {
    return this._filterBy;
  }
}
