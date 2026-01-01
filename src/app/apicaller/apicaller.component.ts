import { Component, OnInit } from '@angular/core';
import { Postdata } from '../postdata';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-apicaller',
  standalone: true,
  providers: [DataService],
  imports: [FormsModule],
  template: `
   Local Data:

   @for(a of data;track $index){
    <p>{{a}}</p>
   }
   <hr>
   Public Data(User given userid Shows only): <br>
   <br>
   <input type="number" [(ngModel)]="row" (input)="getcustomPost(this.row)">
   <br><br>
   <p>{{post?.id}} - {{post?.title}}</p>

   <hr>
   Public Data(Default on Initialize):

   @for(a of posts;track $index){
    <p>{{a?.id}} - {{a?.title}}</p>
  
    <br><br>
   }
  `,
  styleUrl: './apicaller.component.css'
})
export class ApicallerComponent implements OnInit {
  data: string[] = [];
  posts: Postdata[] = [];
  row:Number=0;
  post:Postdata|null=null;

  constructor(private dataservice: DataService) {
    this.data = this.dataservice.getLocalData();
  }

  ngOnInit() {
    this.dataservice.getPublicData().subscribe(
      {
        next: (response: Postdata[]) => {
          this.posts = response;
        },
        error: (error: any) => { console.log(error); }
      })
  }

  getcustomPost(r:Number){
    this.dataservice.getcustomPost(this.row).subscribe(
      {
        next:(res:Postdata)=>{
          this.post=res;
        },
        error:(e:any)=>{
          console.log(e);
          
        }

      }
    )
  }
}
