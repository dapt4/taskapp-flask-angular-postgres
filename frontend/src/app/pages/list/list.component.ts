import { Component } from '@angular/core';
import {ListService} from './list.service';
import {Task} from './types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  constructor(private listSvc: ListService){}

  tasks: Task[] = []

  private getData(){
    this.listSvc.getTasks().subscribe(data => {
      this.tasks = data;
    })
  }

  public deleteTask(id: number){
    this.listSvc.deleteTask(id).subscribe(data => {
      console.log(data)
      this.getData();
    })
  }

  ngOnInit(){
    this.getData()
  }
}
