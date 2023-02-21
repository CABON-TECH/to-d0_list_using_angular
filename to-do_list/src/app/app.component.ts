import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [];
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

  public deleteTask(index) {
    this.items.splice(index, 1);
  }
  
}


