import type { Patient } from "../types";
import { usePatientStore } from "../store";
import PatientDetailsItem from "./PatientDetailsItem";
import { toast } from "react-toastify";

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { deletePatient, getPatientById } = usePatientStore();

    const handleClick = () => {
        deletePatient(id);
        toast.error('Paciente eliminado correctamente');
    };

    const { name, caretaker, email, date, syntoms, id } = patient;

    const orderProps = [
        { label: 'ID', data: id },
        { label: 'Nombre', data: name },
        { label: 'Propietario', data: caretaker },
        { label: 'Email', data: email },
        { label: 'Fecha de Alta', data: date.toString() },
        { label: 'Sintomas', data: syntoms }
    ];

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            {orderProps.map((prop, idx) => (
                <PatientDetailsItem
                    key={idx}
                    label={prop.label}
                    data={prop.data}
                />
            ))}

            <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer rounded-xl"
                    onClick={() => getPatientById(id)}
                >Editar</button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold cursor-pointer rounded-xl"
                    onClick={handleClick}
                >Eliminar</button>
            </div>
        </div>
    );
}
