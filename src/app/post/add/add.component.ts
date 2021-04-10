import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
PostForm:FormGroup
auth_id:any
// @Input() selectedAuthorId:number;
// @Input() selectedAuthorId:any;
  constructor(private myservice:PostService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.selectedAuthorId);
    this.PostForm=new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      content: new FormControl(null,[Validators.required]),
      date: new FormControl(null,[Validators.required])
    });

    this.auth_id = this.route.snapshot.params.id;
    console.log(this.auth_id)
  }

  onSubmit() {
    
    this.myservice.createPost(this.auth_id,this.PostForm.value).subscribe(
      (data) => {
        console.log(data)
        // this.data=data;
        this.router.navigate(['/post'])
      
  
      })
    }
}
