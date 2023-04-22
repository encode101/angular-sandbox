import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ButtonComponent } from './button/button.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [ButtonComponent, TextareaComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ButtonComponent, TextareaComponent],
})
export class SharedModule {}
