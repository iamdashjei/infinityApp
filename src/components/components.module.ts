import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { AccordionComponent } from './accordion/accordion';
import { AccordionLoftComponent } from './accordion-loft/accordion-loft';
import { AccordionBoilerComponent } from './accordion-boiler/accordion-boiler';
import { AccordionEshComponent } from './accordion-esh/accordion-esh';
import { AccordionEshBoilerComponent } from './accordion-esh-boiler/accordion-esh-boiler';
import { AccordionCavitySolidWallComponent } from './accordion-cavity-solid-wall/accordion-cavity-solid-wall';
import { ImageUploadComponent } from './image-upload/image-upload';
import { ImageUploadSurveyorComponent } from './image-upload-surveyor/image-upload-surveyor';
import { EshUploadSurveyorComponent } from './esh-upload-surveyor/esh-upload-surveyor';
import { CavityWallComponentUploadComponent } from './cavity-wall-component-upload/cavity-wall-component-upload';
import { BoilerImageUploadComponent } from './boiler-image-upload/boiler-image-upload';
import { LoftImageUploadComponent } from './loft-image-upload/loft-image-upload';
@NgModule({
	declarations: [ProgressBarComponent,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent,
    ImageUploadSurveyorComponent,
    EshUploadSurveyorComponent,
    CavityWallComponentUploadComponent,
    BoilerImageUploadComponent,
    LoftImageUploadComponent],
	imports: [],
	exports: [ProgressBarComponent,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent,
    ImageUploadSurveyorComponent,
    EshUploadSurveyorComponent,
    CavityWallComponentUploadComponent,
    BoilerImageUploadComponent,
    LoftImageUploadComponent]
})
export class ComponentsModule {}
