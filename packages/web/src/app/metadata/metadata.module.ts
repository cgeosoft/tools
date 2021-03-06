import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MetadataComponent } from './metadata.component';

@NgModule({
  declarations: [MetadataComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([{
      path: '',
      component: MetadataComponent
    }])
  ]
})
export class MetadataModule { }
