import { Component, OnInit } from '@angular/core';
export interface Students {
  id: number;
  name: string;
  email: string;
  gender: string;
}
const ELEMENT_DATA: Students[]  = [
  {
    id: 1,
    name: "Jack",
    email: "jack@gmail.com",
    gender: "male"
},
{
    id: 2,
    name: "Peter",
    email: "peter@gmail.com",
    gender: "male"
},
{
    id: 3,
    name: "Mary",
    email: "mary@gmail.com",
    gender: "female"
},
{
    id: 4,
    name: "Smith",
    email: "smith@gmail.com",
    gender: "male"
},
{
    id: 5,
    name: "John",
    email: "john@gmail.com",
    gender: "male"
}

];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  public dataSource = ELEMENT_DATA;
  

 
  title = 'prueba_pdf_maker';
  
  constructor(){
  
  }

 
  

  ngOnInit(): void {
  }

}
