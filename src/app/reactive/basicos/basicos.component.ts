import { FormBuilder,FormGroup } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{

  // miFormulario:FormGroup=new FormGroup({
  //   'nombre':new FormControl('RTX 4080ti'),
  //   'precio':new FormControl(1500),
  //   'existencias':new FormControl(0)
  // })
miFormulario:FormGroup=this.fb.group({
  nombre:['RTX 40480ti'],
  precio:[0],
  existencias:[0]
})

  constructor(private fb:FormBuilder) { }



}
