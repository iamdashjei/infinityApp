import { Component, ViewChild, OnInit, Renderer, Input  } from '@angular/core';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from "../../app/firebase.config";
import { Camera, CameraOptions  } from '@ionic-native/camera';
import { AngularFireStorage, AngularFireUpladTask } from 'angularfire2/storage';


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
  task: AngularFireUploadTask;
  progress: any;
  image: string;

  accordionExpanded = false;

  @ViewChild("imageuploadForms") imageuploadFormContent: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";

  constructor(public renderer: Renderer, private camera: Camera, public storage: AngularFireStorage) {
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

  // async takePhoto() {
  //   // Camera Options
  //   try {
  //   const options: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  //
  //   const result = await this.camera.getPicture(options);
  //   const image = `data:image/jpeg;base64,${result}`;
  //   const pictures = storage().ref('pictures/myPhoto_slug' + Math.floor(new Date().getTime()/1000));
  //   pictures.putString(image, 'data_url');
  // } catch (e) {
  //   console.error(e);
  // }
  //
  // }

  uploadPhoto() {
    // Upload Options
  }

  createUploadTask(file: string) : void {
    // Create Upload Task and a Progressbar

    const filePath = 'mysample_${ new Date().getTime()}.jpg';

    this.image = 'data:image/jpg;base64,' + file;
    this.task = this.storage.ref(filePath).putString(this.image, 'data_url');
    this.progress = this.task.percentageChanges();
  }

  async uploadHandler(){
    const base64 = await this.captureImage();
    this.createUploadTask(base64);
  }

}
