import { 
	Component, 
	Input,
	trigger,
	state,
	style,
	transition,
	animate
} from '@angular/core';

@Component({
	selector: 'my-pokemon-detail',
	templateUrl: 'assets/html/detail.html'
})

export class PokemonDetailComponent {

	@Input()
	pokemon: any;

}