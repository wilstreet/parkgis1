import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCeX5Ro4gnlArDLZ9RIJ0Tva13A7Wlzheo'
    })
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
