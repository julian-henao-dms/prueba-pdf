import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import htmlToPdfmake from 'html-to-pdfmake';   
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export interface Students {
  id: number;
  name: string;
  email: string;
  gender: string;
}
export interface Vegetable {
  name: string;
}
export interface Section {
  name: string;
  updated: Date;
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
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];

  @ViewChild('htmlData', { static: false }) htmlData!: ElementRef;
 
  vegetables: Vegetable[] = [
    {name: 'apple'},
    {name: 'banana'},
    {name: 'strawberry'},
    {name: 'orange'},
    {name: 'kiwi'},
    {name: 'cherry'},
  ];

  drop(event: CdkDragDrop<Vegetable[]>) {
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  public dataSource = ELEMENT_DATA;
  

 
  title = 'prueba_pdf_maker';
  
  constructor(){
  
  }


  public downloadPDF() {
    const doc = new jsPDF();
    const htmlData = this.htmlData.nativeElement;

    var html = htmlToPdfmake(htmlData.innerHTML);
      
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open(); 
    
   
  }
  

  ngOnInit(): void {
  }

}
