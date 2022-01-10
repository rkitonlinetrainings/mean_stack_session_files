import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
@Component({
    selector: "app-person", 
    templateUrl: "./person.component.html", 
    styleUrls: [ "./person.component.css" ]
})

export class PersonComponent {
    title: string = "Person!";
    personName: string;
    personAge: number;
}