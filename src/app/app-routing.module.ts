import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './guards/auth.guard';
import { UnsavedChangesGuard } from './guards/unsaved-changes.guard';

const routes: Routes = [
  { path: 'register', component: RegisterComponent, canDeactivate: [UnsavedChangesGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
