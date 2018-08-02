import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { UploadFileServiceProvider } from '../../providers/upload-file-service/upload-file-service';
import { FileUpload } from '../../providers/upload-file-service/fileupload';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

/**
 * Generated class for the LoftImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'loft-image-upload',
  templateUrl: 'loft-image-upload.html'
})
export class LoftImageUploadComponent implements OnInit{

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    @ViewChild("loftsurveyorForms") loftsurveyorFormContent: any;
    @Input('title') title: string;

    selectedFiles: FileList;
    currentFileUpload: FileUpload;
    progress: {percentage: number} = {percentage: 0};
    data = false;
    accordionExpanded = false;
    signature = '';
    isDrawing = false;

    icon: string = "arrow-forward";


    constructor(public renderer: Renderer, private uploadService: UploadFileServiceProvider) {}

    ngOnInit(){
      console.log(this.loftsurveyorFormContent.nativeElement);
      this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "webkitTransition", "max-height 3200ms, padding 500ms");
    }

    toggleAccordionLoftSurveyor() {
      if(this.accordionExpanded){
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "0px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "0px 16px");
      } else {
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "max-height", "3200px");
        this.renderer.setElementStyle(this.loftsurveyorFormContent.nativeElement, "padding", "13px 16px");
      }

      this.accordionExpanded = !this.accordionExpanded;
      this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
    }

    selectFileLoftSurveyor(event){
          this.selectedFiles = event.target.files;
    }

    uploadLoftSurveyor(){
      const file = this.selectedFiles.item(0);
      this.currentFileUpload = new FileUpload(file);
      this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
    }

}
