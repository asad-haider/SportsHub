export class League {
  strSport: string;
  strLeague: string;
  intFormedYear: string;
  dateFirstEvent: string;
  strGender: string;
  strCountry: string;
  strWebsite: string;
  strDescriptionEN: string;

  constructor(league) {
    this.strSport = league.strSport;
    this.strLeague = league.strLeague;
    this.intFormedYear = league.intFormedYear;
    this.dateFirstEvent = league.dateFirstEvent;
    this.strGender = league.strGender;
    this.strCountry = league.strCountry;
    this.strWebsite = league.strWebsite;
    this.strDescriptionEN = league.strDescriptionEN;
  }
}
