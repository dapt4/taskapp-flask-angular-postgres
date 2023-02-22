import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../list/types';
import { Host } from '../../../assets/host';

@Injectable({
  providedIn: 'root'
})
export class NewEditService {

  constructor(private http: HttpClient) { }

  public getData(id: number):Observable<Task>{
    const url = `${Host}/task/${id}`
    return this.http.get<Task>(url);
  }

  public save(body: Task, id: number): Observable<Task>{
    var url = `${Host}/task`;
    if (id){
      url = `${Host}/task/${id}`;
      return this.http.put<Task>(url, body);
    }
    return this.http.post<Task>(url, body);
  }
}
