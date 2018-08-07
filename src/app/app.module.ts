import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { SurveyorFormPage } from '../pages/surveyor-form/surveyor-form';
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
import { TimeAgoPipe } from 'time-ago-pipe';

import { AccordionComponent } from '../components/accordion/accordion';
import { ImageUploadSurveyorComponent } from '../components/image-upload-surveyor/image-upload-surveyor';
import { AccordionLoftComponent } from '../components/accordion-loft/accordion-loft';
import { LoftImageUploadComponent } from '../components/loft-image-upload/loft-image-upload';
import { UtilProvider } from '../providers/util/util';
import { NativeGoogleMapsProvider } from '../providers/native-google-maps/native-google-maps';


import { AppState } from './app.global';
import { CardIO } from '@ionic-native/card-io';

import { Badge } from '@ionic-native/badge';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignaturePage,
    DashboardPage,
    SurveyorFormPage,
    TimeAgoPipe,
    AccordionComponent,
    ImageUploadSurveyorComponent,
    AccordionLoftComponent,
    LoftImageUploadComponent
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
    SignaturePage,
    DashboardPage,
    SurveyorFormPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AppState,
    CardIO,
    Badge,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UploadFileServiceProvider,
    UtilProvider,
    NativeGoogleMapsProvider
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}
