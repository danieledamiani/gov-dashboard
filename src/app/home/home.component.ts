import { Component }  from '@angular/core';

@Component({
    template: '<h1>{{title}}</h1>'
})
export class HomeComponent {
    title: string = 'Gov Dashboard';
}
