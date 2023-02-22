import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = ['Task 1', 'Task 2', 'Task 3'];
  public newTask = '';


  public addToList() {
    if (this.newTask == '') {
      alert('Please enter a task.');
    }
    else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTask(index: number) {
    this.items.splice(1);
  }
  
}


