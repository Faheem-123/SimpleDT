import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-auth',
  templateUrl: './add-auth.component.html',
  styleUrls: ['./add-auth.component.css']
})
export class AddAuthComponent implements OnInit {

  id: any;
  data: any;
  addForm:FormGroup;
  error: any;
  constructor(private router:Router, private route:ActivatedRoute,private myservice:AuthService) {
  
   }

  ngOnInit(): void {
    this.addForm=new FormGroup({
      id: new FormControl(null),
      first_name: new FormControl(null,[Validators.required]),
      last_name: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required]),
      birthdate: new FormControl(null,[Validators.required]),
      added: new FormControl(null,[Validators.required])
    });

  //   this.id=this.route.snapshot.params['id'];
//  this.getAuthorId(this.id);
  }

  onSubmit() {
      this.myservice.createAuthor(this.addForm.value).subscribe(
        (data) => {
          this.router.navigate(['auth'])
        },
      )
  }


}
