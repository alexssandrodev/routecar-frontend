
type Month = {
    monthName: string;
    userId: string;
    launchs: Launch[];
    totalization: Totalization;
    distributeExpenses: DistributeExpenses[];
    initialAmount: number;
}

export type Launch = {
    launchId: string;
    idUserSystem: string;
    monthName: string;
    category: string;
    type: string;
    value: number;
    created: Date;
}

type Totalization = {
    total:number;
    interest: number;
    income: number;
    revenues: number;
    expenses: number;
}

export type DistributeExpenses = {
    category: string;
    percentage: number;
}

export default Month;
