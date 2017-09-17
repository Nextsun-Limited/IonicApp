import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StarWarsProvider {

  constructor(public http: Http) {}

  GetPeopleList() {
    return this.http.get('https://swapi.co/api/people/').map(res => {
      let outputArr = [];
      for(let item of res.json().results) {
        outputArr.push({
          name: item.name,
          picture: this.GetPicture(item.name,400),
          birth_year: item.birth_year,
          gender: item.gender,
          homeworld: item.homeworld,
          species: item.species,
          url: item.url
        });
      }
      this.GetUrlData(outputArr, 'homeworld');
      this.GetUrlData(outputArr, 'species');
      return outputArr;
    });
  }

  GetPeopleDetails(url) {
    return this.http.get(url).map(res => {
      return {
        eye_color: res.json().eye_color,
        hair_color: res.json().hair_color,
        skin_color: res.json().skin_color,
        mass: res.json().mass
      };
    });
  }

  private GetUrlData(items, replaced){
    for(let item of items) {
      this.http.get(item[replaced]).toPromise().then(res => {
        item[replaced] = res.json();
      });
    }
  }

  private GetPicture(name, size){
    const pictures = ['luke', 'han', 'leia', 'yoda', 'darthvader', 'r2d2', 'c3po', 'chewbacca', 'lando', 'stormtrooper', 'palpatine', 'jaba', 'boba', 'jawa', 'ewok', 'greedo', 'obiwan'];
    const newName = name.replace(/-/g, "").toLowerCase();
    const fistName = newName.split(" ")[0];
    const secondName = newName.split(" ")[1];
    for (let pic of pictures){
      if(newName.includes(pic) || pic.includes(newName)) {
        return 'http://facetheforce.today/' + pic + '/' + size;
      } else if(fistName.includes(pic) || pic.includes(fistName)){
        return 'http://facetheforce.today/' + pic + '/' + size;
      } else if(secondName && (secondName.includes(pic) || secondName.includes(pic))){
        return 'http://facetheforce.today/' + pic + '/' + size;
      }
    }
    return 'http://facetheforce.today/stormtrooper/' + size;

  }

}
