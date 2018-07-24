import { NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { AccordionComponent } from './accordion/accordion';
import { AccordionLoftComponent } from './accordion-loft/accordion-loft';
import { AccordionBoilerComponent } from './accordion-boiler/accordion-boiler';
import { AccordionEshComponent } from './accordion-esh/accordion-esh';
import { AccordionEshBoilerComponent } from './accordion-esh-boiler/accordion-esh-boiler';
import { AccordionCavitySolidWallComponent } from './accordion-cavity-solid-wall/accordion-cavity-solid-wall';
import { ImageUploadComponent } from './image-upload/image-upload';
@NgModule({
	declarations: [ProgressBarComponent,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent],
	imports: [],
	exports: [ProgressBarComponent,
    AccordionComponent,
    AccordionLoftComponent,
    AccordionBoilerComponent,
    AccordionEshComponent,
    AccordionEshBoilerComponent,
    AccordionCavitySolidWallComponent,
    ImageUploadComponent]
})
export class ComponentsModule {}
