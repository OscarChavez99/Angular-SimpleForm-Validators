import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ageRangeValidator } from './validators/validators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, 
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular-SimpleForm-Validators';
  form = new FormGroup({
    name: new FormControl<string>("", Validators.required),
    age: new FormControl<number | undefined>(undefined, [Validators.required, ageRangeValidator])
  });

  onSubmit() {
    if (this.form.valid) {
      alert('Valid Form! :)');
    } else {
      alert('Invalid Form :(');
    }
  }
}
