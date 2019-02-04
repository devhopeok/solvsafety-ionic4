import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { FormFillPage } from './form-fill.page';

const routes: Routes = [
  {
    path: '',
    component: FormFillPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormFillPage],
  providers: [Camera],
})
export class FormFillPageModule {}
