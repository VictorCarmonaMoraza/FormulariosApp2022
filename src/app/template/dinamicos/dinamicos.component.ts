import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  persona: Persona =
    {
      nombre: 'Fernando',
      favoritos: [
        { id: 1, nombre: 'Metal Gear' },
        { id: 2, nombre: 'Fifa 2022' }
      ]
    }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('formulario posteado');
  }

   //Elimina un elemento del listado de favoritos por su id
   eliminar(index:number){
    //Borramos del arreglo
    this.persona.favoritos.splice(index,1);
  }

}
