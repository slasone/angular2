import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  newPerson: Person = {name: "", surname: "", age: 0};
  editMode: boolean = false;

  personList: Person[] = [
    {name: "Lorenzo", surname: "Lasagni", age: 18},
    {name: "Bobo", surname: "Vieri", age: 19},
    {name: "Matti", surname: "Alvaro", age: 18},
  ]

  buttonAdd = () => {
    this.personList.push(this.newPerson);
    this.newPerson = {name: "", surname: "", age: 0};
  }

  buttonDelete = (index: number) => {
    if(index > -1){
      this.personList.splice(index, 1);
    }
  }

  editPerson = (index: number) => {
    this.editMode = true;
    this.newPerson = this.personList[index];
  }

  completeEdit = () => {
    this.editMode = false;
    this.newPerson = {name: "", surname: "", age: 0};
  }
}
