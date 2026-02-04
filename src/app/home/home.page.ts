import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { calendarOutline, filterOutline } from 'ionicons/icons';

type DashboardPeriod = 'cycle' | 'month' | 'custom';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonIcon,
    IonContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip,
  ],
})
export class HomePage {
  period: DashboardPeriod = 'cycle';

  // Mock visual: depois vira cálculo real baseado no SQLite + ciclo de pagamento
  totals = {
    received: 3500,
    spent: 1287.42,
    balance: 2212.58,
    dailyLimit: 73.75,
  };

  constructor() {
    addIcons({ calendarOutline, filterOutline });
  }

  get periodLabel(): string {
    switch (this.period) {
      case 'cycle':
        return 'Ciclo do pagamento';
      case 'month':
        return 'Este mês';
      case 'custom':
        return 'Período';
    }
  }
}
