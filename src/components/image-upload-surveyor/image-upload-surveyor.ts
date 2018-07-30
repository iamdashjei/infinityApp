import { Component } from '@angular/core';

/**
 * Generated class for the ImageUploadSurveyorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-upload-surveyor',
  templateUrl: 'image-upload-surveyor.html'
})
export class ImageUploadSurveyorComponent {

  text: string;

  constructor() {
    console.log('Hello ImageUploadSurveyorComponent Component');
    this.text = 'Hello World';
  }

}
