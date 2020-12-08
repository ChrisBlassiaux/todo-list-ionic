import { JSDocCommentStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  value = ''

  items:any = []

  constructor() {}
  // constructor(public alertController: AlertController) {}

  // async newTask() {
    
  //   const alert = await this.alertController.create({
  //     cssClass: 'my-custom-class',
  //     header: 'Nouvelle tâche',
  //     inputs: [{
  //       name: 'TaskName',
  //       type: 'text',
  //       placeholder: 'Manger une pomme'
  //     }],
  //     buttons: ['Valider']
  //   });

  //   await alert.present();
  // }

  ngOnInit() {
    if (localStorage.getItem('items')) {
      this.items = JSON.parse(localStorage.getItem('items'))
    }
  }

  addItem() {
    let obj = {
      value: this.value,
      isDone: false
    }
    this.items.unshift(obj)
    localStorage.setItem('item', JSON.stringify(this.items))
    this.value = ''
  }

  deleteItem(ind) {
    this.items = this.items.filter((c, index) => index != ind)
    localStorage.setItem('items', JSON.stringify(this.items))
  }

  setDone(index) {
    let item = this.items.find((c, ind) => ind == index)
    item.isDone = !item.isDone
    localStorage.setItem('items', JSON.stringify(this.items))
  }
}