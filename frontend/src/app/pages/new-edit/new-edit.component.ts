import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../list/types';
import { NewEditService } from './new-edit.service';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})
export class NewEditComponent {
  
  id: number = 0;

  data: Task = {
    id: 0,
    title: '',
    description: ''
  };

  constructor(
    private route: ActivatedRoute,
    private newEditSvc: NewEditService,
    private router: Router
  ){}

  private getId(){
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }

  private getTaskData(){
    this.newEditSvc.getData(this.id).subscribe(data => {
      this.data = data;
    })
  }

  public save(){
    this.newEditSvc.save(this.data, this.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/'])
    })
  }

  ngOnInit(){
    this.getId();
    if (this.id) this.getTaskData();
  }
}
