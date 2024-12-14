import { Routes } from '@angular/router';
import { LoginComponent } from './componentens/usuario/login/login.component';
import path from 'path';
import { RegistrarComponent } from './componentens/usuario/registrar/registrar.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './componentens/usuario/index/index.component';
import { ListarProyectosComponent } from './componentens/proyecto/listar-proyectos/listar-proyectos.component';
import { AgregarTareaComponent } from './componentens/proyecto/agregar-tarea/agregar-tarea.component';
import { AgregarProyectoComponent } from './componentens/proyecto/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './componentens/proyecto/editar-proyecto/editar-proyecto.component';
import { ListarTareasComponent } from './componentens/tareas/listar-tareas/listar-tareas.component';
import { EditarTareasComponent } from './componentens/tareas/editar-tareas/editar-tareas.component';
import { AgregarTareasComponent } from './componentens/tareas/agregar-tareas/agregar-tareas.component';

export const routes: Routes = [
    { path: 'LoginUsuario', component: LoginComponent },
    { path: 'RegistrarUsuario', component: RegistrarComponent },
    { path: 'agregarProyecto', component: AgregarProyectoComponent },
    { path: 'listarProyecto', component: ListarProyectosComponent },
    
    {path: 'agregarTareas' ,   component:AgregarTareasComponent , canActivate: [AuthGuard]},
    
    { path: 'index', component: IndexComponent, canActivate: [AuthGuard] },
    { path: 'editarProyecto', component: EditarProyectoComponent, canActivate: [AuthGuard] },
    { path: 'listarTarea', component: ListarTareasComponent, canActivate: [AuthGuard] },
    { path: 'editarTarea', component: EditarTareasComponent, canActivate: [AuthGuard] }

];
