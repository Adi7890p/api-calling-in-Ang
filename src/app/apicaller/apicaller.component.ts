import { Component, OnInit } from '@angular/core';
import { Postdata } from '../postdata';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-apicaller',
  standalone: true,
  providers: [DataService],
  imports: [],
  template: `
   Local Data:

   @for(a of data;track $index){
    <p>{{a}}</p>
   }
   <hr>
   Public Data:

   @for(a of posts;track $index){
    <p>{{a.id}} - {{a.title}}</p>
  
    <br><br>
   }
  `,
  styleUrl: './apicaller.component.css'
})
export class ApicallerComponent implements OnInit {
  data: string[] = [];
  posts: Postdata[] = [];

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
}
