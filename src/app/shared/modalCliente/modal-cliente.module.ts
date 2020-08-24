import { ModalClienteComponent } from "./modal-cliente.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";

@NgModule({
  declarations: [ModalClienteComponent],
  imports: [CommonModule, FormsModule, MaterialModule],
})
export class ModalClienteModule {}
