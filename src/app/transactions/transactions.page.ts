import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { DatePipe, NgFor } from '@angular/common';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';

type TransactionKind = 'income' | 'expense';

interface TransactionVm {
  id: string;
  kind: TransactionKind;
  title: string;
  category: string;
  date: string; // ISO
  amount: number;
}

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
  imports: [
    NgFor,
    DatePipe,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  ],
})
export class TransactionsPage {
  readonly items: TransactionVm[] = [
    {
      id: '1',
      kind: 'expense',
      title: 'Mercado',
      category: 'Alimentação',
      date: new Date().toISOString(),
      amount: 87.5,
    },
    {
      id: '2',
      kind: 'income',
      title: 'Salário',
      category: 'Renda',
      date: new Date().toISOString(),
      amount: 3500,
    },
  ];

  constructor() {
    addIcons({ addOutline });
  }

  onAddClicked(): void {
    // Placeholder: depois vira modal/form e salva no SQLite
    // Por ora a tela é só visual.
    alert('Em breve: adicionar lançamento');
  }
}
