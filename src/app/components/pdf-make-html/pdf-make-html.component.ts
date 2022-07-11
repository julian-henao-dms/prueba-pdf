import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

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
const ELEMENT_DATA: Students[] = [
  {
    id: 1,
    name: 'Jack',
    email: 'jack@gmail.com',
    gender: 'male',
  },
  {
    id: 2,
    name: 'Peter',
    email: 'peter@gmail.com',
    gender: 'male',
  },
  {
    id: 3,
    name: 'Mary',
    email: 'mary@gmail.com',
    gender: 'female',
  },
  {
    id: 4,
    name: 'Smith',
    email: 'smith@gmail.com',
    gender: 'male',
  },
  {
    id: 5,
    name: 'John',
    email: 'john@gmail.com',
    gender: 'male',
  },
  {
    id: 6,
    name: 'John',
    email: 'john@gmail.com',
    gender: 'male',
  },
  {
    id: 7,
    name: 'John',
    email: 'john@gmail.com',
    gender: 'male',
  },
  {
    id: 8,
    name: 'John',
    email: 'john@gmail.com',
    gender: 'male',
  },
];
@Component({
  selector: 'app-pdf-make-html',
  templateUrl: './pdf-make-html.component.html',
  styleUrls: ['./pdf-make-html.component.scss'],
})
export class PdfMakeHtmlComponent implements OnInit {
  // vegetables: Vegetable[] = [
  //   {name: 'apple'},
  //   {name: 'banana'},
  //   {name: 'strawberry'},
  //   {name: 'orange'},
  //   {name: 'kiwi'},
  //   {name: 'cherry'},
  // ];

  // drop(event: CdkDragDrop<Vegetable[]>) {
  //   moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  // }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public displayedColumns: string[] = ['id', 'name', 'email', 'gender'];
  public dataSource = ELEMENT_DATA;

  typesOfShoes: string[] = [
    'Boots',
    'Clogs',
    'Loafers',
    'Moccasins',
    'Sneakers',
  ];
  title = 'htmltopdf';
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
  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = {
      content: [html],
      styles: {
        'html-strong': {
          background: 'yellow', // it will add a yellow background to all <STRONG> elements
        },
        b: { bold: true },
        strong: { bold: true },
        u: { decoration: 'underline' },
        s: { decoration: 'lineThrough' },
        em: { italics: true },
        i: { italics: true },
        h1: { fontSize: 24, bold: true, marginBottom: 5 },
        h2: { fontSize: 22, bold: true, marginBottom: 5 },
        h3: { fontSize: 20, bold: true, marginBottom: 5 },
        h4: { fontSize: 18, bold: true, marginBottom: 5 },
        h5: { fontSize: 16, bold: true, marginBottom: 5 },
        h6: { fontSize: 14, bold: true, marginBottom: 5 },
        a: { color: 'blue', decoration: 'underline' },
        strike: { decoration: 'lineThrough' },
        p: { margin: [0, 5, 0, 10] },
        ul: { marginBottom: 5 },
        li: { marginLeft: 5 },
        table: { marginBottom: 5,},
        th: { bold: true, fillColor: '#EEEEEE' },
      },
    };
    pdfMake.createPdf(documentDefinition).open();
    // pdfMake.createPdf(documentDefinition).download();
  }
  ngOnInit(): void {}
}
