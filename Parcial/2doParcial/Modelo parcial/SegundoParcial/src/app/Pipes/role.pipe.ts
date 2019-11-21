import { Pipe, PipeTransform } from '@angular/core';
import { UserRoles } from '../Classes/user';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return UserRoles[value];
  }

}
