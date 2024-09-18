export interface BoardCard {
    id: number,
    title: string,
    description: string,
    assigned: string | null,
    priority: string | null,
    participants: string[],
}

export interface ChosenCard extends BoardCard {
   columnStatusId: number,
}

export enum CardPriority {
    High = 'High',
    Medium ='Medium',
    Low ='Low',
}
