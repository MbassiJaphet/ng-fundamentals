import { Directive } from "@angular/core";
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:  '[validateLocation]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LocationValidatorDirective, multi: true }]
})
export class LocationValidatorDirective implements Validator{

    validate(formGroup: FormGroup): { [key: string] : any } | null {
        let addressControl = formGroup.controls['address'];
        let cityControl = formGroup.controls['city'];
        let countryControl = formGroup.controls['country'];
        let onlineUrlControl = (<FormGroup> formGroup.root).controls['onlineUrl'];

        if( cityControl && cityControl.value &&
            addressControl && addressControl.value &&
            countryControl && countryControl.value || 
            (onlineUrlControl && onlineUrlControl.value)) {
           return null;
        } else {
            return {validateLocation: false};
        }
    }

}