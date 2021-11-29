import { Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Angular Form Validation Example';
   myForm!: FormGroup;
   constructor(private fb: FormBuilder) {
    this.createForm();
  }
   createForm() {
    this.myForm = this.fb.group({
       username: ['', Validators.required ]
    });
  }
}