import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {environment} from "environments/environment";
import {League} from "./leagues.interface";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LeaguesService {
  baseUrl: string = environment.baseUrl;
  apiKey: string = environment.aplKey;
  private sportName: string;

  constructor(private http: HttpClient) {
  }

  public getLeaugesBySportName(sportName): Observable<League[]> {
    let apiURL = `${this.baseUrl}${this.apiKey}/search_all_leagues.php?s=${sportName}`;
    return this.http
      .get(apiURL)
      .map(response => {
        if (!response.countrys) return [];
        return response.countrys.map((league) => new League(league));
      });
  }
}
