export interface Note {
    id: number;
    content: string;
    tag: string;
    title: string;
    updatedAt: string;
    createdAt: string;
}

export type NoteTag ='Todo' | 'Work'| 'Personal'| 'Meeting'| 'Shopping'

