import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of  } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppConfigService } from '../app.config';

export class AirShoppingRQ { 
//TODO - cleanup/refactor below from air-shopping-basic-search
  from: string; 
  to: string;
  date: string;
  cabinClass: number;
  nbPax: number;
}

//TODO - cleanup/refactor below into app.config & config.json (remove secret keys)
/* Airgateway */
const endpoint = '/airgateway/v1.1/AirShopping'; //'https://proxy.airgateway.net/v1.1/AirShopping';

const httpOptions = {
   headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'Authorization': '***your-api-key-here***',
    'AG-Providers': '*'
  })
}; 


@Injectable({
  providedIn: 'root'
})

export class AirShoppingService {

    constructor(private http: HttpClient){}
  
    private extractData(res: Response) {
      let body = res;
      return body || { };
    } 
    
   getAirShoppingOffers(airShoppingRQ : AirShoppingRQ): Promise<any> {
	    console.log("calling AirShoppingService.getAirShoppingOffers(airShoppingRQ : AirShoppingRQ)");
		console.log(AppConfigService.settings.apiServer);
		console.log(airShoppingRQ);
	    let searchCriteria = '{\"metadata\":{\"country\":\"DE\",\"currency\":\"EUR\",\"locale\":\"de_DE\"},\"originDestinations\":[{\"departure\":{\"airportCode\":\"'+ airShoppingRQ.from +'\",\"date\":\"'+ airShoppingRQ.date + '\",\"terminalName\":\"\"},\"arrival\":{\"airportCode\":\"'+ airShoppingRQ.to +'\",\"terminalName\":\"\",\"time\":\"\"}}],\"preferences\":{\"cabin\":[\"'+ airShoppingRQ.cabinClass +'\"],\"fare\":{},\"nonStop\":false},\"travelers\":{\"adt\":'+ airShoppingRQ.nbPax +',\"chd\":0,\"inf\":0}}';  
		return this.http.post<any>(endpoint, searchCriteria, httpOptions).pipe(map(this.extractData)).toPromise();
    }
  
    getAirShoppingOffer(id): Observable<any> {
        return this.http.get(endpoint + 'airShoppingOffer/' + id).pipe(map(this.extractData));
    }


    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`); 

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
