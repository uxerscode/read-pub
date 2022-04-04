import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');

// Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'
import {MatToolbarModule} from '@angular/material/toolbar';

const ngMat = [
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule,
]

import { DragDropFileUploadDirective } from './directives/drag-drop-file-upload.directive';
const appDir = [
  DragDropFileUploadDirective,
]
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { PubDetailsComponent } from './components/pub-details/pub-details.component';
const appComp = [
  DragDropComponent,
]

@NgModule({
  declarations: [
    AppComponent,
    ...appDir,
    ...appComp,
    PubDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...ngMat,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
