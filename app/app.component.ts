import  { Component, OnInit, 
	trigger,
	state,
	style,
	transition,
	animate } from '@angular/core';


import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonService } from './pokemon.service';

@Component({
	selector: 'my-app',
	templateUrl: 'assets/html/home.html',
	providers: [PokemonService],
	animations: [
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ]),
    
  ])
]	
})

export class AppComponent implements OnInit {
	public pokemones: any[];
	selectedPokemon: any;
	page: number;

	ngOnInit() {
  		//this.pokemonService.getPokemones().then(  pokemones => this.pokemones = pokemones );
  		this.page = 1;
  		this.pokemonService.getPokemonPage(this.page).then( pokemones => this.pokemones = pokemones );
  	}

  	getNextPage() {
		this.page++;
		this.pokemonService.getPokemonPage(this.page).then( pokemones => this.pokemones = pokemones );	
	}

	getPrevPage() {
		if( this.page > 1 )
		{
			this.page--;
			this.pokemonService.getPokemonPage(this.page).then( pokemones => this.pokemones = pokemones );
		}	
	}



	constructor(private pokemonService: PokemonService) { }

	onSelect(pokemon:any) {
		this.selectedPokemon = pokemon;
	}
}
