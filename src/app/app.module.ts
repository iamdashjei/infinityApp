import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

import { Camera  } from '@ionic-native/camera';
import { FIREBASE_CONFIG } from "./firebase.config";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { UploadFileServiceProvider } from '../providers/upload-file-service/upload-file-service';

import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePage } from '../pages/signature/signature';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG.firebase),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    SignaturePadModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignaturePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UploadFileServiceProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
