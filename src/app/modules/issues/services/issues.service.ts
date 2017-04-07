import { Injectable } from '@angular/core';
import { Headers, Response, Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
import { Issue } from '../classes/issue';
@Injectable()
export class IssuesService {

private url = "https://api.github.com";
private headers = new Headers({'Accept': 'application/vnd.github.v3+json'});

  constructor(private http:  Http) { }

  getIssues(owner: string, project: string): Promise<Issue[]> {
    const action = "/search/issues?";
    const repo = "q=repo:";
    const type ="+type:issue";
    const pager = "&page=0&per_page=10";
    //console.log(this.url+action+repo);
    return this.http.get(this.url+action+repo+owner+"/"+project+type+pager, this.headers)
    .toPromise()
    .then(this.extractData)
    .catch(this.handleError);
  }

private extractData(res:Response) {
  //console.log(res.json()); 
    let body = res.json().items;
    return body as Issue[] || [];
}

private handleError(error: any):
  Promise<any> {
    console.log('An error ocurred', error);
      return Promise.reject(error.message || error);
  }
}
