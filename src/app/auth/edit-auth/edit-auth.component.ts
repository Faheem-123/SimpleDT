import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-edit-auth',
  templateUrl: './edit-auth.component.html',
  styleUrls: ['./edit-auth.component.css']
})
export class EditAuthComponent implements OnInit {
  id: any;
  data: any;
  editForm:FormGroup;
  error: any;
  constructor(private router:Router, private route:ActivatedRoute,private myservice:AuthService) {
  
   }

  ngOnInit(): void {
    this.editForm=new FormGroup({
      id: new FormControl(null),
      first_name: new FormControl(null,[Validators.required]),
      last_name: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      birthdate: new FormControl(null),
      added: new FormControl(null)
    });

    this.id=this.route.snapshot.params['id'];
   this.getAuthorId(this.id);
   console.log(this.id)
  }

  
  getAuthorId(id){
    this.myservice.getId(this.id).subscribe(data=>{
       this.data=data;
       this.editForm.patchValue({
        id: this.data.id,
        first_name: this.data.first_name,
        last_name: this.data.last_name,
        email: this.data.email,
        birthdate: this.data.birthdate,
        added:this.data.added
      });
      //  console.log(this.data);
     })
    
   }
   onSubmit() {
    this.myservice.updateAuthor(this.editForm.value).subscribe(data=>{
        console.log(data)
        this.router.navigate(['auth'])
      },
    )
}
}
