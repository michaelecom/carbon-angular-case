import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private subscription: Subscription;

  title = 'Мои заметки';

  notes: any;

  constructor(private notesService: NotesService) { }

  ngOnInit() {
    this.subscription = this.notesService.observableNotes.subscribe(notes => {
      this.notes = notes;
    });

    this.notes = this.notesService.getNotes();
  }

  addNote() {
    this.notes = this.notesService.addNote('new note', '');
  }

}
