
export type Patient = {
    id: string,
    name: string,
    caretaker: string,
    email: string,
    date: Date,
    syntoms: string
}

export type DraftPatient = Omit<Patient, 'id'>