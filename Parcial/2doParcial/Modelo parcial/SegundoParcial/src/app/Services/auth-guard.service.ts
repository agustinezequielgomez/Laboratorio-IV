import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, UrlSegmentGroup } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DisplaySnackBarService } from './display-snack-bar.service';
import { StorageService } from './storage.service';
import { UserRoles } from '../Classes/user';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private jwt: JwtHelperService = new JwtHelperService();
  constructor(private router: Router, private snack: DisplaySnackBarService, private storage: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (state.url !== '/Access' && this.jwt.isTokenExpired(this.storage.getSessionStorage('data').token)) {
      this.snack.openSnackBar('Autenticacion expirada. Volviendo al login.', 'warning', 2);
      timer(3000).subscribe(() => {
        this.router.navigate(['/Access']);
      });
    }

    const ROLE = this.storage.getSessionStorage('data').role;
    switch (state.url) {
      case '/Home':
      case '/Access':
        return true;


      case '/SubjectByStudent':
        return (ROLE === UserRoles.Alumno) ? true : this.router.navigate(['Home']);

      case '/SubjectByTeacher':
      case '/StudentBySubject':
        return (ROLE === UserRoles.Profesor) ? true : this.router.navigate(['Home']);

      case '/Users':
      case '/Subjects':
        return (ROLE === UserRoles.Administrador) ? true : this.router.navigate(['Home']);

    }
  }


}
