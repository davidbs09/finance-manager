import { Injectable } from '@angular/core';
import { SqliteService } from './sqlite.service';

export interface Categoria {
     id?: number;
     nome: string;
     tipo: 'gasto' | 'ganho';
}

@Injectable({
     providedIn: 'root',
})
export class CategoriaService {
     private tabela = 'categorias';

     constructor(private sqliteService: SqliteService) {
          this.criarTabela();
     }

     async criarTabela() {
          const query = `CREATE TABLE IF NOT EXISTS ${this.tabela} (
               id INTEGER PRIMARY KEY AUTOINCREMENT,
               nome TEXT NOT NULL,
               tipo TEXT NOT NULL
          )`;
          await this.sqliteService.execute(query);
     }

     async adicionar(categoria: Categoria) {
          const query = `INSERT INTO ${this.tabela} (nome, tipo) VALUES (?, ?)`;
          await this.sqliteService.execute(query, [categoria.nome, categoria.tipo]);
     }

     async listar(): Promise<Categoria[]> {
          const query = `SELECT * FROM ${this.tabela}`;
          const res = await this.sqliteService.query(query);
          return res.values as Categoria[];
     }

     async atualizar(categoria: Categoria) {
          const query = `UPDATE ${this.tabela} SET nome = ?, tipo = ? WHERE id = ?`;
          await this.sqliteService.execute(query, [categoria.nome, categoria.tipo, categoria.id]);
     }

     async remover(id: number) {
          const query = `DELETE FROM ${this.tabela} WHERE id = ?`;
          await this.sqliteService.execute(query, [id]);
     }
}
