import { LatestFixtureInterface } from "../types/latestFixture";

export const LatestFixture: LatestFixtureInterface = {
  date: "18 jul 22",
  matchTime: "Full time",
  homeTeamName: "Arsenal",
  homeTeamScore: 4,
  awayTeamName: "Everton",
  awayTeamScore: 0,
  stadium: "M&T bank stadium",
  homeTeamScorerDetails: [
    { playerName: "saka", time: "60" },
    { playerName: "jesus", time: "90+1" },
  ],
  awayTeamScorerDetails: [],
  stats: [
    { statType: "shorts", home: "12", away: "7" },
    { statType: "shorts on target", home: "4", away: "2" },
    { statType: "possession", home: "60%", away: "40%" },
    { statType: "passes", home: "599", away: "405" },
    { statType: "fouls", home: "10", away: "12" },
    { statType: "yellowCard", home: "1", away: "0" },
    { statType: "redCard", home: "0", away: "0" },
    { statType: "offsides", home: "3", away: "2" },
    { statType: "fouls", home: "10", away: "12" },
    { statType: "corners", home: "6", away: "2" },
  ],
  homeTeamImage:
    "https://ssl.gstatic.com/onebox/media/sports/logos/4us2nCgl6kgZc0t3hpW75Q_96x96.png",
  awayTeamImage:
    "https://ssl.gstatic.com/onebox/media/sports/logos/C3J47ea36cMBc4XPbp9aaA_96x96.png",
};
