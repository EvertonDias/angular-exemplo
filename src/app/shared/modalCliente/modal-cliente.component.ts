import { Component, OnInit, Inject, Input } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface ClienteEditado {
  titulo: string;
  nomeCliente: string;
}

@Component({
  selector: "modal-cliente",
  templateUrl: "./modal-cliente.component.html",
  styleUrls: ["./modal-cliente.component.css"],
})
export class ModalClienteComponent implements OnInit {
  dados = {
    titulo: "Novo Cliente",
    nomeCliente: "",
  } as ClienteEditado;

  isValidNome: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<ModalClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClienteEditado
  ) {}

  ngOnInit() {
    if (this.data) {
      this.dados.nomeCliente = this.data.nomeCliente;
    }
  }

  isNomeInvalido(nomeCliente: string) {
    if (nomeCliente.trim() == "") {
      this.isValidNome = false;
      return true;
    }

    this.isValidNome = true;
    return false;
  }
}
