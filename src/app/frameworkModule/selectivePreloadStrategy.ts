//angular imports
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';

//rxjs imports
import { Observable, of } from 'rxjs';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {

    //If the route indicates it needs to be preloaded, load it. Otherwise do nothing
    if (route.data && route.data['preload']) {
      return load();
    } 
    else {
      return of(null);
    }

  }

}
