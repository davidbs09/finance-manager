import { Component } from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [
    NgFor,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonButton,
  ],
})
export class SettingsPage {
  salaryValue = 3500;
  paydayDay = 5;
  readonly paydayDays = Array.from({ length: 28 }, (_, i) => i + 1);
  categoriesText = 'Alimentação\nTransporte\nCasa\nLazer\nSaúde';
  debtsText = 'Cartão\nAluguel';

  onSaveClicked(): void {
    // Placeholder: depois persiste no SQLite
    alert('Em breve: salvar configurações');
  }
}
