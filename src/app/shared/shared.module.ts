import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {HeaderComponent} from "../core/header/header.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [TestComponent],
  declarations: [TestComponent],
})
export class SharedModule { }
