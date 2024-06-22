import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonFab, IonIcon, IonFabButton, IonMenuButton } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.page.html',
  styleUrls: ['./capture.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonIcon, IonFab, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton]
})

export class CapturePage implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openCamera() {
    this.photoService.takePhoto();
   }

}
