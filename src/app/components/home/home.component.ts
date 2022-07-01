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
  isPrinting: boolean = false;
  pdfPrintContent: any;
  
  constructor(){
  
  }

  public downloadPDF() {
    // Extraemos el
    this.isPrinting = true;
    const pdfContent: any = document.getElementById('htmlData');
    // const pdfContent = this.pdfPrintContent.nativeElement;
    html2canvas(pdfContent).then((canvas) => {
      const fileWidth = 297;
      const pageHeight = 430;
      const fileHeight = (canvas.height * fileWidth) / canvas.width;
      const fileUri = canvas.toDataURL('image/png');
      let position = 0;
      let heightLeft = fileHeight - pageHeight;
      const pdf = new jsPDF('l', 'mm', [fileWidth, pageHeight]);

      pdf.addImage(fileUri, 'PNG', 0, 0, fileWidth, pageHeight);
      while(heightLeft > 0){
        position = heightLeft - fileHeight + 29;
        pdf.addPage();
        pdf.addImage(fileUri, 'PNG', 0,  position, fileWidth, pageHeight);
        heightLeft -= pageHeight;
      }
      pdf.save('test.pdf');
      this.isPrinting = false;
    });
  }


  ngOnInit(): void {
  }

}