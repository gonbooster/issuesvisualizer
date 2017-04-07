import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Imports for design
//Imports for design
import { MaterialModule } from '@angular/material';
import 'hammerjs';

//Imports for arquitecture
import { IssuesListComponent } from './components/issues-list/issues-list.component';
import { IssueComponent } from './components/issue/issue.component';
import { IssuesService } from './services/issues.service';
import { IssuesRoutingModule } from './issues-routing.module';

@NgModule({
    imports: [
        CommonModule, 
        MaterialModule.forRoot(),
        IssuesRoutingModule
        ],
    declarations: [IssuesListComponent, IssueComponent],
    providers: [IssuesService]
})
export class IssuesModule { }