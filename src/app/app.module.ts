import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from "@angular/common";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
​
​
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';

​
​
​
@NgModule({
  declarations: [
   
    AppComponent,
   
    
    
    
   
  ],
  imports: [
    BrowserModule,HttpClientModule,CommonModule,
    AppRoutingModule,MatButtonModule,MatToolbarModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatIconModule,MatSidenavModule,MatFormFieldModule,
    MatListModule,MatInputModule,MatCardModule,MatTableModule,MatIconModule,MatSortModule, MatPaginatorModule, MatDialogModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
