import { Component, OnInit } from '@angular/core';

export interface Link {
  label: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{

  links: Link[] = [
    { label: 'Home', path: 'home', icon: 'home' },
    { label: 'Organizadores', path: 'organizadores', icon: 'assignment_ind' },
    { label: 'Eventos', path: 'eventos', icon: 'today' },
    { label: 'Usuarios', path: 'usuarios', icon: 'supervisor_account' },
    { label: 'Estadísticas', path: 'estadisticas', icon: 'graphic_eq' },
    { label: 'Catálogos', path: 'catalogos', icon: 'list' }
  ];

  isSideBarExpanded = false;
}
