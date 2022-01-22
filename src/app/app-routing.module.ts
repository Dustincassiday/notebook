import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotebookComponent } from './components/notebook/notebook.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/1',
    pathMatch: 'full',
  },
  {
    path: ':page',
    component: NotebookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
