import {Component, OnInit} from "@angular/core";
import {LeaguesService} from "./leagues.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-leagues',
  templateUrl: 'leagues.component.html',
  styleUrls: ['leagues.component.scss'],
  providers: [LeaguesService]
})

export class LeaguesComponent implements OnInit {

  private leagues;
  private sport: string;

  constructor(private leaguesService: LeaguesService, private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.route.url.subscribe((url: any) => {
      this.sport = url[0].path;
    });
    this.leaguesService
      .getLeaugesBySportName(this.sport)
      .subscribe(
        (leagues) => {
          this.leagues = leagues;
        }
      );
  }
}
