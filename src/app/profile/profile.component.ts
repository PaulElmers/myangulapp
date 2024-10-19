// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(private router: Router) {
    this.userData = this.router.getCurrentNavigation().extras.state?.user;
  }

  ngOnInit(): void {}
}
