import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  note: any | undefined;

  private subscription: Subscription;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private notesService: NotesService) {
    this.subscription = activateRoute.queryParams.subscribe(params => {
      if (params.id <= this.notesService.getNotes().length) {
        this.note = this.notesService.getNote(params.id);
      }
      else {
        this.router.navigate(['/']);
      }
    });
  }

  setTitle(event: any) {
    this.note.title = event.target.value;

    this.notesService.setNote(this.note);
  }

  setText(event: any) {
    this.note.text = event.target.value;

    this.notesService.setNote(this.note);
  }

}
