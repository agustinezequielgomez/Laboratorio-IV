import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    switch (state.url) {
      case '/bienvenido':
        return true;
        break;
      case '/login':
        return true;
        break;

      case '/busqueda':
        return true;
        break;
      case '/peliculas/alta':
        return this.isLoggedIn();
        break;

      case '/actor/alta':
        return this.isLoggedIn();
        break;

        case '/actor/listado':
        return true;
        break;

        case '/peliculas/listado':
          return true;
          break;
    }
    return false;
  }

  isLoggedIn() {
    console.log(JSON.parse(localStorage.getItem('loggedIn')));
    return JSON.parse(localStorage.getItem('loggedIn'));
  }
}
