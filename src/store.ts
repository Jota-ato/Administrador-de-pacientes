import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { v4 } from 'uuid';
import type { DraftPatient, Patient } from './types';

type PatienState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: string) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) => {
    return { ...patient, id: v4() };
};

export const usePatientStore = create<PatienState>()(
    devtools(
        persist(
            (set) => ({
            patients: [],
            activeId: '',
            addPatient: (data) => {
                const newPatient = createPatient(data);
                set((state) => ({
                    patients: [...state.patients, newPatient]
                }));
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }));
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }));
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId ? { id: state.activeId, ...data } : patient),
                    activeId: ''
                }));
            }
            }), {
                name: 'patient-storage',
                storage: createJSONStorage(() => sessionStorage)
        })));