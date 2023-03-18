import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from './core';

const routes: Routes = [
  { path: '', redirectTo: AppRoutes.ClassesPage, pathMatch: 'full' },
  { path: AppRoutes.ClassesPage, loadChildren: () => import('./modules/classes/classes.module').then(m => m.ClassesModule) },
  { path: AppRoutes.ClientsPage, loadChildren: () => import('./modules/clients/clients.module').then(m => m.ClientsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
