import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'], 
 
})
export class InventarioPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }






  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'agregar',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'punto',
        icon: 'locate',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'linea ',
        icon: 'analytics',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'poligono',
        icon: 'git-compare',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
 }