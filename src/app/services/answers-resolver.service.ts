import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Answers } from '../shared/answers.interface';

@Injectable()
export class AnswersResolverService implements Resolve<any>{
  constructor(private httpClient: HttpClient) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> {
    return this.httpClient.get('assets/answers.json');
  }
}
