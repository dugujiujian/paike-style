import {NgModule} from '@angular/core';


import {LayoutDefaultComponent} from './default/default.component';
import {SharedModule} from '@shared/shared.module';


const COMPONENTS = [
  LayoutDefaultComponent
];

const WIDGETS = [];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...COMPONENTS, ...WIDGETS]
})

export class LayoutModule {
}
