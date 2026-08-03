export interface ActivityInfo {

  id: string;

  userId: string;

  provider: string;

  providerId: string;

  name: string;

  sportType: string;

  distance: number;

  movingTime: number;

  elapsedTime: number;

  elevationGain: number;

  maxSpeed: number;

  averageHour: number;

  maxHour: number;

  calories: number;

  date: string;

  photoUrl: string;

  visibility: boolean;

  rawJson: string;
}
