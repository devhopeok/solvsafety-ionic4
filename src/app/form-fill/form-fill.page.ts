import { Component, OnInit } from '@angular/core';
import {
	NavController,
	PopoverController,
	Events,
	MenuController,
	ToastController,
	AlertController,
	ActionSheetController
} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ParamsService } from '../services/params.service';

@Component({
  selector: 'app-form-fill',
  templateUrl: './form-fill.page.html',
  styleUrls: ['./form-fill.page.scss'],
})
export class FormFillPage implements OnInit {
  module = {icon: '', name: ''};
  report = {
    date: '',
    time: '',
    type: '',
    description: '',
    imageUri: '',
  };

  constructor(
  	public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public actionSheetCtrl: ActionSheetController,
    public camera: Camera,
    public paramsService: ParamsService,
  ) {
  	this.module = this.paramsService.getParam();
  }

  ngOnInit() {
  }

  async onSave() {
    if (this.report.date == '') {
      this.presentToast(this.module.name + " Date is required.");
      return;
    } else if (this.report.time == '') {
      this.presentToast(this.module.name + " Time is required.");
      return;
    } else if (this.report.type == '') {
      this.presentToast(this.module.name + " Type is required");
      return;
    }

    let alert = await this.alertCtrl.create({
      header: 'Success!',
      message: this.module.name + ' report form has been saved successfully',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  async onCancel() {
    let alert = await this.alertCtrl.create({
      header: '',
      message: 'Do you really want to cancel this report?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  // async onAddPhoto() {
  //   let actionSheet = await this.actionSheetCtrl.create({
  //     buttons: [
  //       {
  //         text: 'Take the Photo',
  //         handler: () => {
  //           this.takePhoto(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'From Image Gallery',
  //         handler: () => {
  //           this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'destructive',
  //         handler: () => {
            
  //         }
  //       }
  //     ]
  //   });
 
  //   actionSheet.present();
  // }

  takePhoto(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.report.imageUri = imageData;
    }, (err) => {
     // Handle error
    });
  }

  async presentToast(message) {
    let toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom',
      color: 'danger',
    });
  
    toast.dismiss(() => {

    });
  
    toast.present();
  }

  navigateToAddAction() {
  	this.navCtrl.navigateForward('/add-action');
  }

  async navigateToAttachmentOrUpload() {
    let actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Attach File',
          handler: () => {
          }
        },
        {
          text: 'Take Photo',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Use Last Photo Taken',
          handler: () => {
          }
        },
        {
          text: 'Choose Photo from Library',
          handler: () => {
            this.takePhoto(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Cancel',
          role: 'destructive',
          handler: () => {
            
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  navigateToAddComment() {
		this.navCtrl.navigateForward('/add-comment');
  }


}
