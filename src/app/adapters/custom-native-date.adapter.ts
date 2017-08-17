import {NativeDateAdapter} from "@angular/material";

export class CustomNativeDateAdapter extends NativeDateAdapter{
    getFirstDayOfWeek(): number {
        return 1;
    }
}
