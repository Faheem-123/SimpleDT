import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authors: any;
  result: any;
  data: any;

  constructor(private service: AuthService, public dialog: MatDialog, private router: Router) {
    this.service.getAuthors().subscribe(
      (response) => {
        console.log(response)
        this.authors = response;
        console.log("get authors from database" + this.authors);
      }
    )
  }

  ngOnInit(): void {

    // this.getAuthorData();

  }
  // getAuthorData(){}
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'birthdate', 'edit'];

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.authors.paginator = this.paginator;
  // }

  openDialog(id) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      if (this.data == "true") {
        console.log(this.data);
        this.router.navigate(['auth/edit/' + id])
      }
    });

  }

  deleteDialog(id) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.data = result;
      if (this.data == "true") {
        console.log(this.data);
        this.service.deleteAuthor(id).subscribe(
          (response) => {
            window.location.reload()
          }
        )
      }
    });
  }
}
