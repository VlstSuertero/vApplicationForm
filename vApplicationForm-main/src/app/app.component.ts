import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'vApplicationForm';

  form!: FormGroup;
  v: any;

  ngOnInit() {
    this.form = new FormGroup( {
      name: new FormControl('', [
          Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      birthday: new FormControl('', [
        Validators.required,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ], [
          // MyValidators.uniqEmail
      ]),
      tech: new FormGroup({
        mainTech: new FormControl(''),
        version: new FormControl('')
      }),
      hobbies: new FormArray([])
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = {...this.form.value};
      alert(JSON.stringify(formData));
      console.log('Form data: ', formData)
    }
  }

  setTech() {
    const versionTech: any = {
      angular: ['1.1.1', '1.2.1', '1.3.3'],
      react: ['2.1.2', '3.2.4', '4.3.1'],
      vue: ['3.3.1', '5.2.1', '5.1.3'],
    };

    const techKey = this.form.get('tech')!.get('mainTech')!.value;
    this.v = versionTech[techKey];
  }

  get hobbies(): FormArray {
    return this.form.get('hobbies') as FormArray;
  }

  addHobbies() {
    const hobby = new FormGroup({
      hobbiesName: new FormControl(''),
      duration: new FormControl('')
    });

    this.hobbies.push(hobby);
  }
}
