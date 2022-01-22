import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { PageFormComponent } from './components/page-form/page-form.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [AppComponent, NotebookComponent, PageFormComponent, NavigationComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
