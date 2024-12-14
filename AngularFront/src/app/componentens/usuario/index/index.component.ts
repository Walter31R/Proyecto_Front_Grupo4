import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet ,Router} from '@angular/router';
import { Init } from 'v8';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{

  constructor(private router : Router){}

  
  ngOnInit(): void {
    const mensaje = JSON.stringify(localStorage.getItem("user"));
    console.log(mensaje);
  }


  logout():void {
    localStorage.removeItem('user');
    this.router.navigate(['/LoginUsuario']);
  }



}
