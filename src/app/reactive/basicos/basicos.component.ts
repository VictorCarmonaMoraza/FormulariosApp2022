import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'RTX 4080ti',
      precio:1600,

    })
  }

  // campoEsValido() {
  //   return this.miFormulario.controls['nombre'].errors
  //     && this.miFormulario.controls['nombre'].touched
  // }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      //Comprueba si alguno o todos los campos han sido tocados
      this.miFormulario.markAllAsTouched();
        return;
    }

    //Imprimimos los valores del formulario
    console.log(this.miFormulario.value);
    //Resetea el formulario
    this.miFormulario.reset();
  }

}
