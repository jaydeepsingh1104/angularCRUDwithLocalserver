import { Component, ViewChild } from '@angular/core';
import { PatientServiceService } from '../Service/patient-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {
    constructor(private patientservice: PatientServiceService)
    {
      this.LoadPatent()
    }
    userlist:any;
    dataSource:any;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    displayedColumns: string[] = ['patientID','firstName', 'lastName', 'email', 'gender', 'dateOfBirth','address','phone', 'action'];
    updateuser(id:any )
    {
      console.log(id);
    }
      LoadPatent() {

        this.patientservice.GetPatient().subscribe(res=>{
          this.userlist = res;
          this.dataSource = new MatTableDataSource(this.userlist);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;}
          );

      }
  }
