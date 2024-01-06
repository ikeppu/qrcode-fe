import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consumer-details',
  standalone: true,
  imports: [],
  templateUrl: './consumer-details.component.html',
  styleUrl: './consumer-details.component.scss',
})
export class ConsumerDetailsComponent implements OnInit {
  id: string;
  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log('[ConsumerDetailsComponent] OnInit params ID:', this.id);
    // TODO: Make request to server and got info for details
  }
}
