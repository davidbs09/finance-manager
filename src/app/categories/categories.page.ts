
import { Component, OnInit } from '@angular/core';
import { CategoriaService, Categoria } from '../services/categoria.service';
import {  IonHeader, 
          IonToolbar, 
          IonTitle, 
          IonContent, 
          IonCard, 
          IonCardHeader, 
          IonCardTitle, 
          IonCardContent, 
          IonItem, 
          IonLabel, 
          IonInput, 
          IonSelect, 
          IonSelectOption, 
          IonButton, 
          IonButtons, 
          IonList, 
          IonIcon } from '@ionic/angular/standalone';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
@Component({
     selector: 'app-categories',
     templateUrl: './categories.page.html',
     styleUrls: ['./categories.page.scss'],
     imports: [
          FormsModule,
          IonHeader,
          IonToolbar,
          IonTitle,
          IonContent,
          IonCard,
          IonCardHeader,
          IonCardTitle,
          IonButtons,
          IonButton,
          IonIcon,
     ],
})
export class CategoriesPage implements OnInit {
     categorias: Categoria[] = [];
     novaCategoria: Categoria = { nome: '', tipo: 'gasto' };

     constructor(private categoriaService: CategoriaService) {
          addIcons({ addOutline });
     }

     async ngOnInit() {
          await this.carregarCategorias();
     }

     async carregarCategorias() {
          this.categorias = await this.categoriaService.listar();
     }

     async adicionarCategoria() {
          if (!this.novaCategoria.nome.trim()) return;
          await this.categoriaService.adicionar(this.novaCategoria);
          this.novaCategoria = { nome: '', tipo: 'gasto' };
          await this.carregarCategorias();
     }

     async removerCategoria(id: number) {
          await this.categoriaService.remover(id);
          await this.carregarCategorias();
     }
}
