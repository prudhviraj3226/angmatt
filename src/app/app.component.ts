import { Component } from '@angular/core';
import { PostService } from './post.service';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PostService,HttpModule]
})
export class AppComponent {
  title = 'app works!';
  users=[];
  
  onClick($event)
  {
	  alert("hiii")
  }
  
  constructor(private _postService:PostService){
	  this._postService.getPost()
	  
	  .subscribe(
            res => {
                this.users = res;
				console.log(this.users)
                
            })
	  
  }
  
}
