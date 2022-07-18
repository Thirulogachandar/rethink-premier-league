export interface LatestFixtureInterface {
  date: string;
  homeTeamName: string;
  homeTeamScore: number;
  awayTeamName: string;
  awayTeamScore: number;
  stadium: string;
  homeTeamScorerDetails: ScorerDetailInterface[];
  awayTeamScorerDetails: ScorerDetailInterface[];
  stats: gameStatInterface[];
  homeTeamImage: string;
  awayTeamImage: string;
  matchTime: string;
}
export interface ScorerDetailInterface {
  playerName: string;
  time: string;
}
export interface gameStatInterface {
  statType: string;
  home: string;
  away: string;
}
