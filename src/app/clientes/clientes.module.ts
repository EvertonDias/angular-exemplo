import { ModalClienteComponent } from "../shared/modalCliente/modal-cliente.component";
import { MaterialModule } from "./../shared/material/material.module";
import { ClientesViewComponent } from "./clientes-view/clientes-view.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ClientesViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "clientes",
        component: ClientesViewComponent,
      },
    ]),
  ],
})
export class ClientesModule {}
