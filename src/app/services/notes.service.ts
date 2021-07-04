import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private notes_api = 'http://localhost:8080/api/user/notes';


  constructor(private http: HttpClient) { }

  getAll() {
    return 
    //return this.webReqService.get('/notes');
  }

  get(id: string) {
    //return this.webReqService.get('/notes/' + id);
  }

  add(payload: Object) {
    return this.http.post(this.notes_api , payload);
  }

  update(note: Note) {
    console.log(note);
    return this.http.patch(this.notes_api + note._id, note);
  }
  

  delete(id: string) {
    //return this.webReqService.delete('/notes/' + id);
  }
}
