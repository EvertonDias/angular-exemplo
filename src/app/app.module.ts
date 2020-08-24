import { ModalClienteModule } from "./shared/modalCliente/modal-cliente.module";
import { ModalClienteComponent } from "./shared/modalCliente/modal-cliente.component";
import { MaterialModule } from "./shared/material/material.module";
import { ClientesModule } from "./clientes/clientes.module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    ClientesModule,
    ModalClienteModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "clientes",
        pathMatch: "full",
      },
    ]),
    BrowserAnimationsModule,
  ],
  entryComponents: [ModalClienteComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
