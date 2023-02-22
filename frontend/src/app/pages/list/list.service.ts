import { Injectable } from '@angular/core';
import { Task } from './types';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Host } from '../../../assets/host'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  public getTasks():Observable<Task[]>{
    const url = `${Host}/`
    return this.http.get<Task[]>(url)
  }

  public deleteTask(id: number):Observable<Task>{
    const url = `${Host}/task/${id}`;
    return this.http.delete<Task>(url);
  }
}
