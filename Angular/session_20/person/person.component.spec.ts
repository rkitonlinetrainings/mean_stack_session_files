import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PersonComponent } from "./person.component";
import { FormsModule } from "@angular/forms";

describe('PersonComponent', () => {
    let component: PersonComponent;
    let fixture: ComponentFixture<PersonComponent>;

	beforeEach(async() => {
		await TestBed.configureTestingModule({
			declarations: [PersonComponent]
		});
	});
	
	beforeEach(() => {
		fixture = TestBed.createComponent(PersonComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => {
		expect(component).toBeTruthy();
	});
	
	it('should bind the input value to component property', () => {
		const hostElement = fixture.nativeElement;
		const nameInput: HTMLInputElement = hostElement.querySelector("#nameId");
		const ageInput: HTMLInputElement = hostElement.querySelector("#ageId");
		
		fixture.detectChanges();
		
		nameInput.value = "amit";
		ageInput.value = "23";
		
		nameInput.dispatchEvent(new Event("input"));
		ageInput.dispatchEvent(new Event("input"));
		
		expect(component.personName).toBe("amit");
		expect(component.personAge.toString()).toBe("23");
		
	});
    
})
