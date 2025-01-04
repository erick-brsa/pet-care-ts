import { toast } from 'react-toastify';
import { Patient } from '../interfaces';
import { usePatientStore } from '../store';
import PatientDetailItem from './PatientDetailItem';

interface PatientDetailsProps {
	patient: Patient;
}

export default function PatientDetails({ patient }: PatientDetailsProps) {

    const { deletePatient, getPatientById } = usePatientStore();
    
	const handleClick =() => {
		toast.error("Paciente eliminado")
		deletePatient(patient.id)
	}

	return (
		<div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-lg">
			<PatientDetailItem label="ID" data={patient.id} />
			<PatientDetailItem label="Nombre" data={patient.name} />
			<PatientDetailItem label="Propietario" data={patient.caretaker} />
			<PatientDetailItem label="Email" data={patient.email} />
			<PatientDetailItem
				label="Fecha Alta"
				data={patient.date.toString()}
			/>
			<PatientDetailItem label="Síntomas" data={patient.symptoms} />

			<div className="flex flex-col lg:flex-row justify-between mt-10 gap-3 ">
				<button
					type="button"
					className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded"
					onClick={() => getPatientById(patient.id)}
				>
					Editar
				</button>
				<button
					type="button"
					className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded"
                    onClick={handleClick}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
}
