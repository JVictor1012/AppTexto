import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeitorService } from '../model/leitor.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formText : FormGroup;

  pinFormatter(value: number) {
    return `${value}%`;
  }

  constructor(private service: LeitorService, fb: FormBuilder) {
    this.formText = fb.group({
      texto:['', Validators.required],
      taxa:[],
      tom:[],
      volume:[]
    
    })
  }

  ler(){
    this.service.letTexto(this.formText.get('texto')?.value, 
    this.formText.get('taxa')?.value,
    this.formText.get('tom')?.value,
    this.formText.get('volume')?.value)
    console.log(this.formText.get('taxa')?.value,
    this.formText.get('tom')?.value,
    this.formText.get('volume')?.value)
  }

}
