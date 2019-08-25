import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillsComponent } from './bills/bills.component';
import { BillListComponent } from './bills/bill-list/bill-list.component';
import { BillItemComponent } from './bills/bill-list/bill-item/bill-item.component';
import { BillDescriptionComponent } from './bills/bill-list/bill-description/bill-description.component';
import { BillEditComponent } from './bills/bill-list/bill-edit/bill-edit.component';
import { BillAddComponent } from './bills/bill-add/bill-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillsComponent,
    BillListComponent,
    BillItemComponent,
    BillDescriptionComponent,
    BillEditComponent,
    BillAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
