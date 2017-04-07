import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssueComponent } from './components/issue/issue.component';

const issuesRoutes: Routes = [
{ path: 'issues/:owner/:project',  component: IssuesListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(issuesRoutes)
  ],
  exports: [
      RouterModule
  ]
})

export class IssuesRoutingModule {}