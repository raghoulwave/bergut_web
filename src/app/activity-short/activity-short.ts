import { Component, input } from '@angular/core';
import { ActivityInfo } from '../activity';

@Component({
  selector: 'app-activity-short',
  imports: [],
  templateUrl: './activity-short.html',
  styleUrl: './activity-short.scss',
})
export class ActivityShort {
  activityShort = input.required<ActivityInfo>();
}
