import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
     providedIn: 'root',
})
export class SqliteService {
     private sqlite: SQLiteConnection;
     private db: SQLiteDBConnection | null = null;
     private dbName = 'finance_manager.db';

     constructor() {
          this.sqlite = new SQLiteConnection(CapacitorSQLite);
     }

     async initDB() {
          if (!this.db) {
               this.db = await this.sqlite.createConnection(this.dbName, false, 'no-encryption', 1, false);
               await this.db.open();
          }
     }

     async execute(query: string, params: any[] = []) {
          await this.initDB();
          return this.db!.run(query, params);
     }

     async query(query: string, params: any[] = []) {
          await this.initDB();
          return this.db!.query(query, params);
     }

     async closeConnection() {
          if (this.db) {
               await this.sqlite.closeConnection(this.dbName, false);
               this.db = null;
          }
     }
}
