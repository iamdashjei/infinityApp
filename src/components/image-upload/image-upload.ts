import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from "../../app/firebase.config";
import { Camera, CameraOptions  } from '@ionic-native/camera';


/**
 * Generated class for the ImageUploadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-upload',
  templateUrl: 'image-upload.html'
})
export class ImageUploadComponent implements OnInit{

  accordionExpanded = false;

  @ViewChild("imageuploadForms") imageuploadFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer) {
    initializeApp(FIREBASE_CONFIG);
  }

  ngOnInit(){
    console.log(this.imageuploadFormContent.nativeElement);
    this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "webkitTransition", "max-height 1200ms, padding 500ms");
  }

  toggleAccordionImageUpload() {
    if(this.accordionExpanded){
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "0px 16px");
    } else {
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "max-height", "1200px");
      this.renderer.setElementStyle(this.imageuploadFormContent.nativeElement, "padding", "13px 16px");
    }

    this.accordionExpanded = !this.accordionExpanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";
  }


}
