import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { HttpModule }     from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokemonService {

	
	private heroesUrl = 'https://api.pokemontcg.io/v1/cards?page=1&pageSize=10'; 
	private pokeUrl = 'https://api.pokemontcg.io/v1/cards'; 

	constructor(private http: Http) { }
	
	
	getPokemones() {
		let res: any = this.http.get(this.heroesUrl)
				.toPromise()
				.then( response => response.json().cards as any[])
				.catch(this.handleError);
		console.log(res);
		return res;
	}

	getPokemonPage( page:number ) {
		let url = this.pokeUrl + '?page='+page+'&pageSize=12';
		let res: any = this.http.get( url )
				.toPromise()
				.then( response => response.json().cards as any[])
				.catch(this.handleError);
		//console.log(res);
		return res;
	}



	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}