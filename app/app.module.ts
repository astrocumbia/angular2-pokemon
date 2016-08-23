import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { PokemonService } from './pokemon.service';


@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule,
    	JsonpModule,
    	FormsModule
	],
	declarations: [ 
		AppComponent,
		PokemonDetailComponent
	],
	bootstrap: [ AppComponent ],
	providers: [
		PokemonService
	]
})

export class AppModule {}

