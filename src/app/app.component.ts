import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  router: Router;
  constructor( router:Router) { this.router = router}
     

  onSubmit(form: JSON): void {  
    //console.log('you submitted value:', form['search']);
    const data = form['search'];
    if (data=="") 
      console.log("NOT DATA");
    else{
      console.log("DATA");
      const [first, second, github, owner, project] = form['search'].split("/");
      this.router.navigate(['./issues', owner, project]);
    }
  }
}
