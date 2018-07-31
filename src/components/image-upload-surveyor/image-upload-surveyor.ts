import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
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

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  @ViewChild("surveyorForms") surveyorFormContent: any;
  @Input('title') title: string;

  public  anArray: any=[];
  public signaturePadOptions: Object = {
  'minWidth': 2,
  'canvasWidth': 400,
  'canvasHeight': 200,
  'backgroundColor': '#f6fbff',
  'penColor': '#666a73'
   };

   selectedFiles: FileList;
   currentFileUpload: FileUpload;
   progress: {percentage: number} = {percentage: 0};
   data = false;
   accordionExpanded = false;
   signature = '';
   isDrawing = false;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer,  private uploadService: UploadFileServiceProvider) {}

  drawComplete() {
   this.isDrawing = false;
  }

  drawStart() {
   this.isDrawing = true;
  }

  clearPad() {
    this.signaturePad.clear();
  }

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
