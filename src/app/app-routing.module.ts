import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'reset-pwd', loadChildren: './reset-pwd/reset-pwd.module#ResetPwdPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'form-fill', loadChildren: './form-fill/form-fill.module#FormFillPageModule' },
  { path: 'add-action', loadChildren: './add-action/add-action.module#AddActionPageModule' },
  { path: 'add-comment', loadChildren: './add-comment/add-comment.module#AddCommentPageModule' },
  { path: 'upload-attachment', loadChildren: './upload-attachment/upload-attachment.module#UploadAttachmentPageModule' },
  { path: 'upload-photo', loadChildren: './upload-photo/upload-photo.module#UploadPhotoPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
