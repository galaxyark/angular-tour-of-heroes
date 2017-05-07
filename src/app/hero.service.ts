import { Injectable } from '@angular/core';
import { Hero } from './heroes.component';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';

    constructor(private http: Http) {}
    
    getHero(id: number): Promise<Hero> {
        return this.http.get(`${this.heroesUrl}/${id}`)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured.', error);
        return Promise.reject(error.message || error);
    }
}