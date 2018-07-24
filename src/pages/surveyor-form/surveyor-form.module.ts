import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyorFormPage } from './surveyor-form';
import { AccordionComponent } from '../../components/accordion/accordion';
import { AccordionLoftComponent } from '../../components/accordion-loft/accordion-loft';
import { AccordionBoilerComponent } from '../../components/accordion-boiler/accordion-boiler';
import { AccordionEshComponent } from '../../components/accordion-esh/accordion-esh';
import { AccordionEshBoilerComponent } from '../../components/accordion-esh-boiler/accordion-esh-boiler';
import { AccordionCavitySolidWallComponent } from '../../components/accordion-cavity-solid-wall/accordion-cavity-solid-wall';
import { ImageUploadComponent } from '../../components/image-upload/image-upload';
@NgModule({
  declarations: [
    SurveyorFormPage,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent
  ],
  imports: [
    IonicPageModule.forChild(SurveyorFormPage),
  ],
})
export class SurveyorFormPageModule {}
