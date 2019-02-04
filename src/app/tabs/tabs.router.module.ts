import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'add-action',
        children: [
          {
            path: '',
            loadChildren: '../add-action/add-action.module#AddActionPageModule'
          }
        ]
      },
      {
        path: 'form-fill',
        children: [
          {
            path: '',
            loadChildren: '../form-fill/form-fill.module#FormFillPageModule'
          }
        ]
      },
      {
        path: 'add-comment',
        children: [
          {
            path: '',
            loadChildren: '../form-fill/form-fill.module#FormFillPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/form-fill',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
