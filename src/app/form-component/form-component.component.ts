import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

interface Obj {
  obj: number,
  value: number;
 }

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})

export class FormComponentComponent implements OnInit {

  sourceProducts: any[];

  targetProducts: any[];



 
  firstname: string;
  lastname: string;
  lastname2: string;
  email: string;
  confirmemail: string;
  mobile: number;
  selectObjects: Function;
  items: SelectItem[];
  objects: Obj[];
  amount: number = 0;
  

  constructor(private primengConfig: PrimeNGConfig) {                                                      
    this.items = [];
    for (let i = 0; i < 10000; i++) {
      this.items.push({ label: 'Item ' + i, value: 'Item ' + i })

    }
      this.objects = [
        { obj: 1, value:1 },
        { obj: 2, value:2 },
        { obj: 3, value:3 },
        { obj: 4, value:4 },
        { obj: 5, value:5 }
      ];
    }
  


  home = [
    { imgURL: "assets/images/img1.jpg"},
  ]




  ngOnInit() {
    this.primengConfig.ripple = true;
    this.sourceProducts  //initialize source produts
    this.targetProducts  //initialize target products
    }
}
