import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';


import {WatermarkComponent} from '@common/watermark/watermark.component';
import {HttpClientModule} from '@angular/common/http';
import {NzBreadCrumbModule, NzFormModule} from 'ng-zorro-antd';
import {IconsProviderModule} from '../icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {BrowserModule} from '@angular/platform-browser';



// region: paike componets & directives
const COMPONENTS = [
  WatermarkComponent
];
const DIRECTIVES = [];
const PIPES = [];

// endregion

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    IconsProviderModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    ReactiveFormsModule
  ],
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    IconsProviderModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzBreadCrumbModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class SharedModule {
}
