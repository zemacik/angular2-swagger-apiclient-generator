import { Injectable } from 'angular2/angular2';
import { Http, Response, Headers } from 'angular2/http';

@Injectable()
export class XXXXX_ApiClientService {

	constructor(public http: Http) {
	}

	public XXXXXX(parameters) {
		let headers = new Headers();
		
		//headers.append('Content-Type', 'application/x-www-form-urlencoded');
		
		return this.http.GETPOSTUPDATEDELETE(uri,data,{headers: headers});
	}

}