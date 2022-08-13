import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm={
    producto:'victor',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.form.controls['producto']?.invalid
      && this.miFormulario?.form.controls['producto']?.touched
  }

  //Valida si el campo precio ha sido tocado y si lo has
  //sido si su valor es mayor que cero
  precioValido(): boolean {
    return this.miFormulario?.form.controls['precio']?.touched &&
      this.miFormulario?.form.controls['precio']?.value < 0
  }

  guardar() {
    //console.log(this.miFormulario);
    this.miFormulario.resetForm({
      producto:'algo',
      precio:0,
      existencias:0
    });
  }

}
