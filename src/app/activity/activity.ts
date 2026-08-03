import { Component } from '@angular/core';
import { ActivityShort } from '../activity-short/activity-short';
import { ActivityInfo } from '../activity';

@Component({
  selector: 'app-activity',
  imports: [ActivityShort],
  templateUrl: './activity.html',
  styleUrl: './activity.scss',
})
export class Activity {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  activity: ActivityInfo = {
    id: 'uuid id',
    userId: 'uuid user id',
    provider: 'Strava',
    providerId: 'uuid Strava',
    name: 'Example Name',
    sportType: 'Running',
    distance: 5032,
    movingTime: 1234567,
    elapsedTime: 1234568,
    elevationGain: 17,
    maxSpeed: 10,
    averageHour: 8,
    maxHour: 10,
    calories: 500,
    date: '20:04 03.08.2026',
    photoUrl: `default.webp`,
    visibility: true,
    rawJson: '{meow: meow}',
  };
}
