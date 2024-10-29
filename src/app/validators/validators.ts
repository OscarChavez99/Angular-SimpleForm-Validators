import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ageRangeValidator(control: AbstractControl): ValidationErrors | null {
    const age = control.value;
    if (age < 1 || age > 100) {
        return { ageRangeError: true };
    }
    return null;
}