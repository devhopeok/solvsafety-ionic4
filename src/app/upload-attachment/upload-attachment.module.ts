import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploadAttachmentPage } from './upload-attachment.page';

const routes: Routes = [
  {
    path: '',
    component: UploadAttachmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UploadAttachmentPage]
})
export class UploadAttachmentPageModule {}
