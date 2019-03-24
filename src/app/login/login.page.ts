import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  arrayparkgis = [
    {  
     nombre: "Ingrese con tu  cuenta de Google para sincronizar los datos de la aplicación",
     img:"../../assets/img/LOGOPKS.png",
     boton: "ingresa con tu cuenta de Google",
     parrafo:"en espera"
     } 
     
     ]
  
 

  constructor(public AlertController:AlertController) { }

  
  ngOnInit() {
  }


  async presentAlert() {
    const alert = await this.AlertController.create({
      header: 'Inicio  de sesion',
      subHeader: 'Iniciar sesion con',
      message: ' ejemplo@gmail.com.',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }

      }, {
        text: 'iniciar',
        handler: () => {
          console.log('Confirm Ok');
        }
      }]
    });

    await alert.present();
  }


}


