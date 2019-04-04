import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Questions } from '../shared/questions.interface';

@Injectable()
export class QuestionResolverService implements Resolve<Questions[]>{
  constructor(private httpClient: HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.httpClient.get('assets/questions.json');
  }

}


