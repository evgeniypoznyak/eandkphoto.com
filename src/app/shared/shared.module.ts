import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {RouterModule} from "@angular/router";
import {CleanMonthPipe} from "./pipes/clean-month.pipe";
import {ObjectKeysPipe} from "./pipes/object.keys.pipe";
import {MakeNamePrettyPipe} from "./pipes/make-name-pretty.pipe";
import {HeaderComponent} from "./header/header.component";
import {ModalComponent} from "./modal/modal.component";
import {MultiItemsYearsComponent} from "./modal/multi-items-years/multi-items-years.component";
import {MultiItemsMonthsComponent} from "./modal/multi-items-months/multi-items-months.component";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TestComponent,
    CleanMonthPipe,
    ObjectKeysPipe,
    MakeNamePrettyPipe,
    HeaderComponent,
    ModalComponent,
    MultiItemsYearsComponent,
    MultiItemsMonthsComponent,
    MenuComponent

  ],
  exports: [
    TestComponent,
    CleanMonthPipe,
    ObjectKeysPipe,
    MakeNamePrettyPipe,
    HeaderComponent,
    ModalComponent,
    MultiItemsYearsComponent,
    MultiItemsMonthsComponent,
    MenuComponent,

  ],
})
export class SharedModule { }
