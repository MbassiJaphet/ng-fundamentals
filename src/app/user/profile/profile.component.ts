import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{

  public profileForm!: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    let firstName = new FormControl(this.authService.currentUser.firstName);
    let lastName = new FormControl(this.authService.currentUser.lastName);
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    });
  }

  saveProfile(formValues: any) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
    console.log(formValues.firstName)
    this.router.navigate(['events']);
  }
  
  cancel() {
    this.router.navigate(['events']);
  }
}