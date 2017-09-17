import {NativeDateAdapter} from "@angular/material";

export class CustomNativeDateAdapter extends NativeDateAdapter{
    getFirstDayOfWeek(): number {
        return 1;
    }

    parse(value: any): Date | null {
        if ((typeof value === 'string') && (value.indexOf('.') > -1)) {
            const str = value.split('.');
            const year = Number(str[2]);
            const month = Number(str[1]) - 1;
            const date = Number(str[0]);

            return new Date(year, month, date);
        } else if((typeof value === 'string') && value === '') {
            return null;
        }
        const timestamp = typeof value === 'number' ? value : Date.parse(value);

        return isNaN(timestamp) ? null : new Date(timestamp);
    }
}
