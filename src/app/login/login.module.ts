import {NgModule} from '@angular/core';


import {SharedModule} from '@shared/shared.module';
import {LoginComponent} from './default/login.component';


const COMPONENTS = [
  LoginComponent
];

const WIDGETS = [];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [...COMPONENTS, ...WIDGETS]
})

export class LoginModule {
}
