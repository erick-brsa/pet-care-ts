export interface DraftPatient {
	name: string;
	caretaker: string;
	email: string;
	date: Date;
	symptoms: string;
}

export interface Patient extends DraftPatient {
	id: string;
}
