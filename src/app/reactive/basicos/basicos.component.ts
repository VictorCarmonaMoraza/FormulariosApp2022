import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  miFormulario:FormGroup=new FormGroup({
    'nombre':new FormControl('RTX 4080ti')
  })

  constructor() { }



}
