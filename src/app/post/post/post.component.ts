import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // name:String="faheem";
  selectedAuthorId: any
  posts: any;
  authors: any;
  displayedColumns: string[] = ['post_id', 'title', 'description', 'content', 'date', 'action'];
  data: any;

  constructor(private myservice: PostService, public dialog: MatDialog, private router: Router) {
    this.myservice.getAuthor().subscribe(
      (response) => {
        this.authors = response;
        console.log(this.authors);
      }
    )
  }

  ngOnInit(): void {
    // this.getAuthorsData();
  }

  // getAuthorsData(){  
  // }

  onChange(id) {
    console.log(id.target.value);
    this.selectedAuthorId = id.target.value;
    console.log(this.selectedAuthorId)
    this.myservice.getPostsByAuthorId(id.target.value).subscribe(
      (response) => {
        console.log(response)
        this.posts = response;
      }
    )
  }

  openDialog(id1, id2) {
    console.log(id1 + "" + id2)
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      if (this.data == "true") {
        this.router.navigate(['/post/edit/' + id1 + '/' + id2])
      }
    });
  }
  onCreate(id) {
    this.router.navigate(['add/' + id])
  }

  deleteDialog(id1,id2) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      if (this.data == "true") {
        console.log(this.data);
        this.myservice.deletePost(id1,id2).subscribe(
          (response) => {
            window.location.reload()
          }
        )
      }
    });
  }

}
