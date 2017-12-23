import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [TestComponent],
  declarations: [TestComponent],
})
export class SharedModule { }
