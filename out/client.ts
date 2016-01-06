import { Injectable } from 'angular2/angular2';
import { Http, Response, Headers } from 'angular2/http';
import { TEST_CLASS_NAME_MODELS } from './models/TEST_CLASS_NAME_models';

@Injectable()
export class TEST_CLASS_NAMEApiClientService {
	
	domain:string;
	
	constructor(public http: Http, options?: any) {
		var domain = (typeof options === 'object') ? options.domain : options;
		this.domain = typeof(domain) === 'string' ? domain : '';
		
		if(this.domain.length === 0) {
			throw new Error('Domain parameter must be specified as a string.');
		}
		
			this.token = (typeof options === 'object') ? (options.token ? options.token : {}) : {};
	}


	/**
	* Nacita zoznam kategorii vydavkov pre ucet
	* @method
	* @name KategorieVydavkov_GetByformucetId
	* @param {VydavkyBusinessFeaturesNacitajKategorieVydavkovQuery} form - Id uctu
	* @param {string} ucetId - 
	* 
	*/
	public KategorieVydavkov_GetByformucetId(form: VydavkyBusinessFeaturesNacitajKategorieVydavkovQuery, ucetId: string) {
		var uri = '/api/ucty/{ucetId}/kategorievydavkov';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
		uri = uri.replace('{ucetId}', ucetId);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name KategorieVydavkov_GetByid
	* @param {integer} id - 
	* 
	*/
	public KategorieVydavkov_GetByid(id: number) {
		var uri = '/api/kategorievydavkov/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name KategorieVydavkov_PutByidform
	* @param {integer} id - 
	* @param {VydavkyBusinessFeaturesZmenKategoriuVydavkovCommand} form - 
	* 
	*/
	public KategorieVydavkov_PutByidform(id: number, form: VydavkyBusinessFeaturesZmenKategoriuVydavkovCommand) {
		var uri = '/api/kategorievydavkov/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
		payload['form'] = form;
	
		return this.http
			.put(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
			   var result = null;
			   
			   // TODO: this method does not return JSON response, so you need to handle response by your own
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name KategorieVydavkov_DeleteByid
	* @param {integer} id - 
	* 
	*/
	public KategorieVydavkov_DeleteByid(id: number) {
		var uri = '/api/kategorievydavkov/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.delete(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name KategorieVydavkov_PostByform
	* @param {VydavkyBusinessFeaturesPridajKategoriuVydavkovCommand} form - 
	* 
	*/
	public KategorieVydavkov_PostByform(form: VydavkyBusinessFeaturesPridajKategoriuVydavkovCommand) {
		var uri = '/api/kategorievydavkov';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
	
		return this.http
			.post(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Prijmy_GetByformucetIdrok
	* @param {VydavkyBusinessFeaturesNacitajPrijmyQuery} form - 
	* @param {string} ucetId - 
	* @param {string} rok - 
	* 
	*/
	public Prijmy_GetByformucetIdrok(form: VydavkyBusinessFeaturesNacitajPrijmyQuery, ucetId: string, rok: string) {
		var uri = '/api/ucty/{ucetId}/prijmy/{rok}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
		uri = uri.replace('{ucetId}', ucetId);
		uri = uri.replace('{rok}', rok);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Prijmy_GetByid
	* @param {integer} id - 
	* 
	*/
	public Prijmy_GetByid(id: number) {
		var uri = '/api/prijmy/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Prijmy_PutByidform
	* @param {integer} id - 
	* @param {VydavkyBusinessFeaturesZmenPrijemCommand} form - 
	* 
	*/
	public Prijmy_PutByidform(id: number, form: VydavkyBusinessFeaturesZmenPrijemCommand) {
		var uri = '/api/prijmy/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
		payload['form'] = form;
	
		return this.http
			.put(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
			   var result = null;
			   
			   // TODO: this method does not return JSON response, so you need to handle response by your own
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Prijmy_DeleteByid
	* @param {integer} id - 
	* 
	*/
	public Prijmy_DeleteByid(id: number) {
		var uri = '/api/prijmy/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.delete(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Prijmy_PostByform
	* @param {VydavkyBusinessFeaturesPridajPrijemCommand} form - 
	* 
	*/
	public Prijmy_PostByform(form: VydavkyBusinessFeaturesPridajPrijemCommand) {
		var uri = '/api/prijmy';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
	
		return this.http
			.post(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Ucty_GetByform
	* @param {VydavkyBusinessFeaturesNacitajUctyPouzivatelaQuery} form - 
	* 
	*/
	public Ucty_GetByform(form: VydavkyBusinessFeaturesNacitajUctyPouzivatelaQuery) {
		var uri = '/api/ucty';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Ucty_PostByform
	* @param {VydavkyBusinessFeaturesPridajUcetPouzivatelaCommand} form - 
	* 
	*/
	public Ucty_PostByform(form: VydavkyBusinessFeaturesPridajUcetPouzivatelaCommand) {
		var uri = '/api/ucty';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
	
		return this.http
			.post(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Ucty_GetByid
	* @param {integer} id - 
	* 
	*/
	public Ucty_GetByid(id: number) {
		var uri = '/api/ucty/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Ucty_PutByidform
	* @param {integer} id - 
	* @param {VydavkyBusinessFeaturesZmenUcetPouzivatelaCommand} form - 
	* 
	*/
	public Ucty_PutByidform(id: number, form: VydavkyBusinessFeaturesZmenUcetPouzivatelaCommand) {
		var uri = '/api/ucty/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
		payload['form'] = form;
	
		return this.http
			.put(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
			   var result = null;
			   
			   // TODO: this method does not return JSON response, so you need to handle response by your own
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Ucty_DeleteByid
	* @param {integer} id - 
	* 
	*/
	public Ucty_DeleteByid(id: number) {
		var uri = '/api/ucty/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.delete(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Vydavky_GetByformucetIdrok
	* @param {VydavkyBusinessFeaturesNacitajVydavkyQuery} form - 
	* @param {string} ucetId - 
	* @param {string} rok - 
	* 
	*/
	public Vydavky_GetByformucetIdrok(form: VydavkyBusinessFeaturesNacitajVydavkyQuery, ucetId: string, rok: string) {
		var uri = '/api/ucty/{ucetId}/vydavky/{rok}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
		uri = uri.replace('{ucetId}', ucetId);
		uri = uri.replace('{rok}', rok);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Vydavky_GetByid
	* @param {integer} id - 
	* 
	*/
	public Vydavky_GetByid(id: number) {
		var uri = '/api/vydavky/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.get(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Vydavky_PutByidform
	* @param {integer} id - 
	* @param {VydavkyBusinessFeaturesZmenVydavokCommand} form - 
	* 
	*/
	public Vydavky_PutByidform(id: number, form: VydavkyBusinessFeaturesZmenVydavokCommand) {
		var uri = '/api/vydavky/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
		payload['form'] = form;
	
		return this.http
			.put(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
			   var result = null;
			   
			   // TODO: this method does not return JSON response, so you need to handle response by your own
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Vydavky_DeleteByid
	* @param {integer} id - 
	* 
	*/
	public Vydavky_DeleteByid(id: number) {
		var uri = '/api/vydavky/{id}';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		uri = uri.replace('{id}', id);
	
		return this.http
			.delete(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	
	/**
	* 
	* @method
	* @name Vydavky_PostByform
	* @param {VydavkyBusinessFeaturesPridajVydavokCommand} form - 
	* 
	*/
	public Vydavky_PostByform(form: VydavkyBusinessFeaturesPridajVydavokCommand) {
		var uri = '/api/vydavky';
		var payload = {};	
		var queryParameters = {};
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		
		payload['form'] = form;
	
		return this.http
			.post(this.domain + uri, payload, { headers: headers, params: queryParameters })
			.map((res: Response) => {
               var result = res.json();
			   
               return result;
            });
	}
	

}