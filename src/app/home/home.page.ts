import { Component } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(private navCtrl: NavController){}//variable privada que contendra la ruta del destino
    lanzarBiblioteca(){
      this.navCtrl.navigateForward("ibiblioteca");//metodo que manda a llamar la 
    }
    lanzarAutor(){
      this.navCtrl.navigateForward("autor");//metodo que manda a llamar la 
    }
}
