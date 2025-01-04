import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

import { DraftPatient, Patient } from './interfaces';

interface PatientState {
	patients: Patient[];
	activeId: string;
	addPatient: (data: DraftPatient) => void;
	deletePatient: (id: string) => void;
	getPatientById: (id: string) => void;
	updatePatient: (data: DraftPatient) => void;
}

const createPatient = (patient: DraftPatient): Patient => {
	return {
		...patient,
		id: uuidv4()
	};
};

export const usePatientStore = create<PatientState>()(
	devtools(persist(set => ({
		patients: [],
		activeId: '',
		addPatient: data => {
			set(state => ({
				patients: [...state.patients, createPatient(data)]
			}));
		},
		deletePatient: id => {
			set(state => ({
				patients: state.patients.filter(p => p.id !== id)
			}));
		},
		getPatientById: id => {
			set(() => ({
				activeId: id
			}));
		},
		updatePatient: data => {
			set(state => ({
				patients: state.patients.map(p =>
					p.id === state.activeId
						? { id: state.activeId, ...data }
						: p
				),
				activeId: ''
			}));
		}
	}), {
		name: 'patient-storage',
		storage: createJSONStorage(() => localStorage) // Esta línea es opcional porque es la configuración por default
	}))
);
