import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientServiceService {

  constructor(private http:HttpClient) { }
  apiurl='https://localhost:7054/api/Patient/Patients';

  GetPatient(){
    return this.http.get(this.apiurl)
  }
  GetUserbyCode(id:any){
    return this.http.get(this.apiurl+'/'+id);
  }
}
