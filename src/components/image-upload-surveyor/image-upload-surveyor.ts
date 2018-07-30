import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';

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
export class ImageUploadSurveyorComponent implements OnInit{
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  progress: {percentage: number} = {percentage: 0};

  accordionExpanded = false;

  public  anArray: any=[];

  @ViewChild("surveyorForms") surveyorFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,  private uploadService: UploadFileServiceProvider) {}

  ngOnInit(){
    console.log(this.surveyorFormContent.nativeElement);
    this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
  }

  toggleAccordionSurveyor() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "max-height", "3200px");
      this.renderer.setElementStyle(this.surveyorFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }

  selectFileSurveyor(event){
        this.selectedFiles = event.target.files;
  }

  uploadSurveyor(){
    const file = this.selectedFiles.item(0);
    this.currentFileUpload = new FileUpload(file);
    this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
  }

  goTo(){
    console.log('this.anArray', this.anArray);
    this.data=true;
  }

  Add(){
    this.anArray.push({'value':''});
  }

}
