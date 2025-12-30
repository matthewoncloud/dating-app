import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private http = inject(HttpClient);
  protected readonly title = signal('Dating App');
  protected members = signal<any[]>([]); 

  async ngOnInit() {
    this.members.set(await this.getMembers() as any[]);
  }

  async getMembers() {
    try {
      return lastValueFrom(this.http.get('https://localhost:5555/api/members'));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

}
