import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Solution } from '../Shared/Models/Solution.model';

@Injectable()
export class SolutionResolver implements Resolve<Solution> {
  constructor(private http: HttpClient) { }

  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Solution> {
    if (route.params['id']) {
      return await this.http
        .get<Solution>('http://localhost:5000/api/Solutions/' + route.params['id'])
        .toPromise()
        .then((response: Solution) => { return response as Solution; })
    }
  }
}
