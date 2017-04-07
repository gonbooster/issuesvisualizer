import { Component, OnInit } from '@angular/core';
import { Issue } from '../../classes/issue';
import { IssuesService } from '../../services/issues.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css'],
  providers: [IssuesService]
})
export class IssuesListComponent implements OnInit {
owner: string;
project: string;
issues: Issue[];
  constructor(private IssuesService: IssuesService, route: ActivatedRoute) { 
    this.owner = route.snapshot.params['owner']; 
    this.project = route.snapshot.params['project'];
    //console.log("issues: "+this.owner+"/"+this.project);
  }
getIssues(): void {
  this.IssuesService.getIssues(this.owner, this.project).then((value) => {
        //SUCCES
        this.issues = value; 
    }, (error) => {
        //FAILURE
    })
}
  ngOnInit() {
    this.getIssues();
  }
}
