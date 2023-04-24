import { Component, OnInit, VERSION as ngVersion } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({}, null);
  }
  ngOnInit() {
    this.initializeForm();
  }

  // myForm.get('name')?.invalid && (myForm.get('name')?.dirty || myForm.get('name')?.touched
  public isMissingRequiredField(fieldName: string): boolean {
    const field = this.myForm.get(fieldName);

    return !!(field?.invalid && (field?.dirty || field?.touched));
  }

  private initializeForm(): void {
    this.myForm = this.fb.group({
      name: ['Sammy', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
    });
  }

  public get AngularVersion(): string { return ngVersion.full;}

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
