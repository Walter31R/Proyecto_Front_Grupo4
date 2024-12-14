import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-shared',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './shared.component.html',
  styleUrl: './shared.component.css'
})
export class SharedComponent implements OnInit{
  constructor(private router : Router){}
  
  username: string | null = null;

  ngOnInit(): void {
    this.username = localStorage.getItem('user');
  }


  logout():void {
    
    localStorage.removeItem('user');
    this.router.navigate(['/LoginUsuario']);
  }

}
