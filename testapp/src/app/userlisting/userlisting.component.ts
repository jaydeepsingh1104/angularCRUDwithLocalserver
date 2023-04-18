import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service: AuthService)
{
this.LoadUser() ;
}
userlist:any;
dataSource:any;
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort;
displayedColumns: string[] = ['username', 'name', 'email', 'status', 'role', 'action'];
updateuser(id:any )
{
  console.log(id);
}
  LoadUser() {
    this.service.Getall().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
    });
  }
}
