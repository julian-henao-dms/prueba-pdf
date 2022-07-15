import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfMakeHtmlComponent } from './components/pdf-make-html/pdf-make-html.component';
import { PdfMakeTestComponent } from './components/pdf-make-test/pdf-make-test.component';

const routes: Routes = [
  {path: 'jspdf-pdfmake', component: PdfMakeHtmlComponent},
  {path: 'only-pdfmake', component: PdfMakeTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
