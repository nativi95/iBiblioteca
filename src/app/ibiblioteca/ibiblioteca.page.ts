import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LibrosService} from '../api/libros.service';
@Component({
  selector: 'app-ibiblioteca',
  templateUrl: './ibiblioteca.page.html',
  styleUrls: ['./ibiblioteca.page.scss'],
})
export class IbibliotecaPage implements OnInit {

  /*
  libros: any[] = [
    { "id": 1, "titulo": "Arduino Práctivo", "editorial": "CASA DO CODIGO", "imagen": "Arduino.jpg", "autor": "FERNANDO BRYANA FRIZZARIN", "anio": "2016" },
    { "id": 2, "titulo": "HTML5 Canvas", "editorial": "BRASPORT", "imagen": "Html5.jpg", "autor": "ROQUE FERNANDO MARCOS SOUSA", "anio": "2014" },
    { "id": 3, "titulo": "Ionic Framework", "editorial": "CASA DO CODIGO", "imagen": "Ionic.jpg", "autor": "ADRIAN GOIS", "anio": "2017" },
    { "id": 4, "titulo": "Node JS", "editorial": "CASA DO CODIGO", "imagen": "Nodejs.jpg", "autor": "CAIO RIBEIRO PEREIRA", "anio": "2014" },
    { "id": 5, "titulo": "Spring MVC", "editorial": "CASA DO CODIGO", "imagen": "Springmvc.jpg", "autor": "ALBERTO SOUZA", "anio": "2015" }
  ];
*/
  constructor( public Libros: LibrosService) { }

  /*
  mostrarDetalle(libro) {
    console.log('antes del metodo');
    this.route.navigate(['book-detail', { 'libro': JSON.stringify(libro) }]);
    console.log('despues del metodo');
  }
  */

  mostrarDetalle(libro){
    this.Libros.mostrarDetalle(libro);
  }
  ngOnInit() { }

}
