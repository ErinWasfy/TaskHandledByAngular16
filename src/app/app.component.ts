import { Component,OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
 genders=["Female","Male"];
 
 signupForm=new FormGroup({});
 ngOnInit(): void {
   this.signupForm=new FormGroup(
    {
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email ]),
      'gender':new FormControl("Female")
    }
   );
 }
 onSubmit()
 {
  console.log(this.signupForm);
 }
 loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
