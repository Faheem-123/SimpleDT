import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editForm:FormGroup;
  id1: any;
  id2: any;
  data: any;
  error: any;

  constructor(private router:Router, private route:ActivatedRoute,private myservice:PostService) { }


  ngOnInit(): void {

    this.editForm=new FormGroup({
      post_id: new FormControl(null),
      title: new FormControl(null,[Validators.required]),
      description: new FormControl(null,[Validators.required]),
      content: new FormControl(null,[Validators.required]),
      date: new FormControl(null,[Validators.required])
    });

    this.id1 = this.route.snapshot.params.author_id;
    this.id2 = this.route.snapshot.params.posts_id;
    this.getPostsId(this.id1,this.id2)
    console.log(this.id1,this.id2)
  }
 getPostsId(id1,id2){
    this.myservice.getPostsByAuthors(id1,id2).subscribe(response=>{
      console.log(response)
       this.data=response;
      //  console.log(this.data);
       this.editForm.patchValue({
        post_id: this.data.post_id,
        title: this.data.title,
        description: this.data.description,
        content: this.data.content,
        date:this.data.date
      });
      //  console.log(this.data);
     })
    
   }

   onSubmit() {
    
    this.myservice.updatePostsForm(this.id1,this.editForm.value).subscribe(
      (data) => {
        // this.data=data;
        this.router.navigate(['/post'])
      console.log(this.data)
  
      },
      (error) => {
        console.log(this.error)
        this.error = error
      })
    }
}
