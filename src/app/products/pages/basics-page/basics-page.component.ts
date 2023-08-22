import { Component } from '@angular/core';

@Component({
    selector: 'app-basics-page',
    templateUrl: './basics-page.component.html',
    styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

    public nameLower: string = "Matias";
    public nameUpper: string = "MATIAS";
    public fullName: string = "mAtIaS sEnDrA";


    public customDate: Date = new Date();

}
