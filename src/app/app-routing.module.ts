import { PracticeSummaryComponent } from './practice-summary/practice-summary.component';
import { PracticeComponent } from './practice/practice.component';
import { HomeComponent } from './home/home.component';
import { AddWordComponent } from './add-word/add-word.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-word',
    component: AddWordComponent,
  },
  {
    path: 'practice',
    component: PracticeComponent,
  },
  {
    path: 'practice-summary',
    component: PracticeSummaryComponent,
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
