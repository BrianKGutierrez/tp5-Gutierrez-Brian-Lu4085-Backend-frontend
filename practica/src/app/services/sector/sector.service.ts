import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sector } from '../../models/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {
  urlBase: string='http://localhost:3000/api/sector/'
  constructor(private _http:HttpClient) { }

   getSectores(): Observable<any> {
    let httpOpttion = {
      headers:new HttpHeaders({
    }),
      params: new HttpParams()
    }
    return this._http.get(this.urlBase,httpOpttion)
    }
    getSector(id:string): Observable<any> {
      let httpOpttion = {
        headers:new HttpHeaders({
      }),
        params: new HttpParams()
      }
      return this._http.get(this.urlBase+id,httpOpttion)
      }
      updateSector(sector:Sector):Observable<any> {
        let httpOption = {
          headers:new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        }
        let body:any=JSON.stringify(sector)
        return this._http.put(this.urlBase+sector._id,body,httpOption)
      }

      addSector(sector:Sector):Observable<any> {
        let httpOption = {
          headers:new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        }
        let body:any=JSON.stringify(sector)
        return this._http.post(this.urlBase,body,httpOption)
      }
    
   
}

