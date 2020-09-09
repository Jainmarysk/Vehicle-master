import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {}
    public vehicledetails(){
return this.http.get('http://localhost:3000/vehicles');
    }
   }

