import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';


@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {

  forma1 : FormGroup;
  forma2 : FormGroup;
  forma3 : FormGroup;
  total: number= 0;
  subtotal: number = 0;
  igv: number = 0;
  cliente: any = {};
  cabecera: any = {};
  precios : any = [];
  web : any = {"descripcion": "pagina web", "horas": 24,"tarifa": 300, "total": 351};
  ecomerce: any = {"descripcion" : "ecomerce", "horas": 24, "tarifa": 300, "total": 367};
  redes_sociales: any = {"descripcion": "Redes Sociales", "horas": 21, "tarifa": 300, "total": 359};
  multimedia: any = {"descripcion": "Multimedia Fotos", "horas": 36, "tarifa": 350, "total": 389};
  today = new Date().toDateString();
  constructor(private fb: FormBuilder) { 
    this.forma1 = this.fb.group({
      descripcion: [null, [Validators.required]],
      horas: [null, [Validators.required]],
      tarifa: [null, [Validators.required]],
      total: [null, [Validators.required]]
    });
    this.forma2 = this.fb.group({
      cliente: [null, [Validators.required]],
      descripcion: [null, [Validators.required]]
    });
    this.forma3 = this.fb.group({
      valido: [null, [Validators.required]],
      numero: [null, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  quitarMultimedia(){
    var lastItem = this.precios.pop();
    console.log(lastItem.total);
    this.subtotal = this.subtotal - lastItem.total;
    this.igv = (this.subtotal*18)/100;
    console.log(this.forma1.value);
    this.total = this.subtotal + this.igv;
    console.log(this.total);
    //this.precios.pop();
  }

  enviar(){
    this.precios.push(this.forma1.value);
    var subtotal = parseInt(this.forma1.value.total, 10);
    this.subtotal = this.subtotal + subtotal;
    this.igv = (this.subtotal*18)/100;
    console.log(this.forma1.value);
    this.total = this.subtotal + this.igv;
    console.log(this.total);
  }
  enviar1(){
    console.log(this.forma2.value);
    this.cliente = this.forma2.value;
    console.log(this.cliente.cliente);
  }

  enviar2(){
    console.log(this.forma3.value);
    this.cabecera = this.forma3.value;
  }

  downloadPDF(){
    return xepOnline.Formatter.Format('content', {render:'download',filename:'content'+this.cliente.cliente});
  }
  generatePDF(){
    var doc = new jsPDF();
    doc.text(50,90,'asdasdasd');
    doc.text(50,100,'page 1')
    doc.addPage();
    doc.text(50,100,'page 2')
    html2canvas(document.getElementById('content')).then(function(canvas) {
    var img = canvas.toDataURL("image/png");
    doc.addImage(img, 'JPEG', 0, 0, 200, 150);
    doc.save('test.pdf');
  });
  // doc.save('test.pdf');//fails to add image to pdf
}

}
