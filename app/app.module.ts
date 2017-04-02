import { NgModule }			from '@angular/core';
import { BrowserModule }	from '@angular/platform-browser';

import { HttpModule }		from '@angular/http';
import { FormsModule }		from '@angular/forms';

import { AppComponent }		from './app.component';
import { HomeComponent }		from './components/home/home.component';
import { StatusComponent }    from './components/status/status.component';
import { TableComponent }    from './components/table/table.component';

import { AppService } from './services/app.service';

@NgModule({
  imports:	[
  	BrowserModule,
  	HttpModule, 
  	FormsModule 
  ],
  declarations: [ 
  	AppComponent,
    HomeComponent,
  	StatusComponent,
    TableComponent
  ],
  providers: [ AppService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }