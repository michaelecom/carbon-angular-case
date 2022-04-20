import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  notes: any = [
    {
      id: 1,
      title: 'note 1',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quasi nam, quia iusto vero voluptatibus? Saepe eos libero iusto assumenda minus velit sapiente vitae harum, nemo, eum et blanditiis ut.
Id libero debitis sit sequi laborum explicabo neque temporibus nisi ducimus rem eveniet provident minus esse quos minima reiciendis beatae vero laudantium, soluta eum nemo obcaecati reprehenderit sed eligendi.Cumque!
Facilis dicta illo, beatae alias aspernatur quod, obcaecati veritatis doloribus delectus consequuntur non nobis consectetur reiciendis qui et suscipit cupiditate saepe libero esse ab impedit ad amet quis vel.Deleniti ?
Ipsam voluptatum culpa quam vero odit! Ullam labore ex natus ad.Expedita, esse libero excepturi sit tempore minus dolores in id pariatur et laudantium repellat, minima vel consequuntur quidem commodi.` },
    { id: 2, title: 'note 2', text: 'text 2' },
    {
      id: 3,
      title: 'note 3',
      text: `Qui quos atque quas dicta nulla commodi sit, quisquam quis alias tempore nesciunt labore optio a ipsam corporis necessitatibus harum. Ad aut officia consequuntur laudantium ut adipisci perspiciatis blanditiis dicta?
Doloremque sequi numquam iure. Recusandae, nobis voluptate! Exercitationem, commodi odit. Repellendus animi, repellat eos nisi nesciunt doloremque, possimus laudantium quasi iste dolores eum quisquam mollitia sed quis esse facilis tempora.
Praesentium, temporibus quaerat quidem nisi assumenda sequi distinctio libero numquam! At, iure quam magni incidunt delectus nobis est consectetur pariatur modi maiores. Cum quia omnis sequi doloribus totam culpa explicabo?
Hic, dolores. Adipisci minus praesentium in autem, sed fuga illo, debitis eaque deserunt nam quos ea laudantium error tempora atque illum assumenda suscipit totam eligendi voluptatum. Enim dolores aspernatur blanditiis.
Corporis, alias eum mollitia rem natus atque ipsum dignissimos rerum error quos officia? Repellendus obcaecati ullam, suscipit ut, aut nobis dicta rem repudiandae sed cupiditate inventore aspernatur accusantium quidem dolor.
Totam deserunt deleniti incidunt dignissimos dolores necessitatibus doloremque sed modi cupiditate dicta exercitationem repellendus delectus error magni, voluptatem voluptas itaque, in sapiente pariatur cumque? Distinctio recusandae ex libero commodi nulla.` },
    { id: 4, title: 'note 4', text: 'text 4' }
  ];

  observableNotes: any;

  public getNotes() {
    // tslint:disable-next-line: triple-equals
    if (localStorage.length == 0) {
      this.saveNotes();
    }

    this.notes = JSON.parse(localStorage.getItem('notes'));

    return this.notes;
  }

  public saveNotes() {
    localStorage.setItem('notes', JSON.stringify(this.notes));

    this.eventChange();
  }

  public getNote(id: number) {
    // tslint:disable-next-line: triple-equals
    return this.notes.find(n => n.id == id);
  }

  public addNote(newTitle: string, newText: string) {
    this.notes.push({ id: this.notes.length + 1, title: newTitle, text: newText });

    this.saveNotes();

    return this.notes;
  }

  setNote(note: any) {
    // tslint:disable-next-line: triple-equals
    this.notes.find(n => n.id == note.id).title = note.title;

    // tslint:disable-next-line: triple-equals
    this.notes.find(n => n.id == note.id).text = note.text;

    this.saveNotes();
  }

  constructor() {
    this.observableNotes = new BehaviorSubject(this.notes);
  }

  eventChange() {
    this.observableNotes.next(this.notes);
  }

}
