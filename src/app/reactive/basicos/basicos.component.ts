import { Validators } from '@angular/forms';
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
  nombre:['RTX 40480ti',[Validators.required,Validators.minLength(3)]],
  precio:[0,[Validators.min(0),Validators.required]],
  existencias:[0,[Validators.min(0),Validators.required]],
})

  constructor(private fb:FormBuilder) { }



}
