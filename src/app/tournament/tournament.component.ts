import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {

  }
  tournament= [
    {'id': 1, 'name':'Winter 2022','description': '7 rounds, 16 players', 'image':'../../assets/tournament.jpg'},
    {'id': 2, 'name':'Summer 2022','description': '7 rounds, 16 players', 'image':'../../assets/home.jpg'},
    {'id': 3, 'name':'Winter 2021','description': '7 rounds, 16 players', 'image':'../../assets/ranking.jpg'},
    {'id': 4, 'name':'Summer 2021','description': '7 rounds, 16 players', 'image':'../../assets/joinnow.jpg'}
  ]
}
