// angular
import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {IconsProviderModule} from './icons-provider.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
// ant-d
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzFormModule } from 'ng-zorro-antd/form';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {zh_CN} from 'ng-zorro-antd/i18n';

// 入口
import {AppComponent} from './app.component';
// 自定义module
import {LayoutModule} from './layout/layout.module';
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from './login/login.module';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IconsProviderModule,
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzFormModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    PagesModule,
    LoginModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
    {provide: LOCALE_ID, useValue: 'zh-Hans'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
