import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeModule } from '@circlon/angular-tree-component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeService } from './tree/tree.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TreeModule,
    HttpClientModule
  ],
  providers: [TreeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
