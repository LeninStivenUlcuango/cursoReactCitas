const Paciente = ({paciente, setPaciente}) => {
    const {nombre, propietario, email, alta, sintomas}=paciente;
    return (
        <div className="mx-5 my-3 bg-white shadow-md px-5 py-10 rounded-lg">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {''}
                <span className="font-normal normal-case">{alta}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="md:flex md:justify-around">
                <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white uppercase fotn-bold rounded-lg"
                onClick={()=> setPaciente(paciente)}
                >Editar</button>
                <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-800 text-white uppercase fotn-bold rounded-lg"
                
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Paciente