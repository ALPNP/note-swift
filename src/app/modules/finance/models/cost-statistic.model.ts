export class CostStatistic {
    startDay: string = null;
    endDay: string = null;
    addSummary: number = null;
    removeSummary: number = null;
    currentInterval: number = null;
    currentDay: string = null;

    constructor(statistic?: any) {
        if (statistic) {
            this.startDay = statistic['startDay'];
            this.endDay = statistic['endDay'];
            this.addSummary = statistic['addSummary'];
            this.removeSummary = statistic['removeSummary'];
            this.currentInterval = statistic['daysCount'];
            this.currentDay = statistic['currentDay'];
        }
    }
}
