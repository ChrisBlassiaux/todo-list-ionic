import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public alertController: AlertController) {}

  async addTask() {
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nouvelle tâche',
      inputs: [{
        name: 'TaskName',
        type: 'text',
        placeholder: 'Manger une pomme'
      }],
      buttons: ['OK']
    });

    await alert.present();
  }
}