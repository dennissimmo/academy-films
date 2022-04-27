import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Film} from "../../../models/film.model";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-film-add-form',
  templateUrl: './film-add-form.component.html',
  styleUrls: ['./film-add-form.component.scss']
})
export class FilmAddFormComponent implements OnInit {
  film: Film;
  filmFormGroup: FormGroup;
  imageUrl: string;

  constructor(private dialog: MatDialogRef<FilmAddFormComponent>) { }

  get actors() {
    return this.filmFormGroup.get('actors') as FormArray;
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.filmFormGroup = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'year': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'boxOffice': new FormControl(null, Validators.required),
      'poster': new FormControl(null, Validators.required),
      'actors': new FormArray([])
    });
  }

  onSubmit() {
    const formValue = this.filmFormGroup.value;
    const filmEntry: Film = {
      name: formValue.name,
      issueYear: formValue.year,
      poster: this.imageUrl,
      boxOffice: formValue.boxOffice,
      actors: formValue.actors,
      createdAt: new Date()
    }

    this.film = filmEntry;
    this.dialog.close(true);
  }

  addActor() {
    this.actors.push(this.createActor());
    console.log(this.filmFormGroup);
  }

  createActor(): FormGroup {
    const actorForm: FormGroup = new FormGroup({
      'name': new FormControl('', Validators.required),
      'surname': new FormControl('', Validators.required)
    });

    return actorForm;
  }

  removeActor(actorIndex: number) {
    this.actors.removeAt(actorIndex);
  }

  onPosterLoaded($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File | null = (target.files as FileList)[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      this.imageUrl = <string> fileReader.result;
    };
    fileReader.onerror = ((error) => {
      console.error(error);
    });
  }
}
