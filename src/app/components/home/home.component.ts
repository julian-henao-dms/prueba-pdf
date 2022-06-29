import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
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

  public downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`${new Date().toISOString()}_listado.pdf`);
    });
  }
  

  ngOnInit(): void {
  }

}
