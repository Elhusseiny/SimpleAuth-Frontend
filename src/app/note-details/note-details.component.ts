import { Component, OnInit } from '@angular/core';
import {Note} from '../models/note.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotesService } from '../services/notes.service';
@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit{

  note: Note;
  new: boolean;
  
  constructor(private notesService: NotesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   
  }

  onSubmit(form: NgForm) {
    if (this.new) {
      // we should save the note
      this.notesService.add(form.value).subscribe((newNote) => {
        this.router.navigateByUrl('/');
      })
    } else {
      this.note.title = form.value.title;
      this.note.body = form.value.body;

      this.notesService.update(this.note).subscribe(() => {
        // this code will run once the note has been updated
        this.router.navigateByUrl('/');
      })
    }
  }

  cancel() {
    this.router.navigateByUrl('/');
  }

}
