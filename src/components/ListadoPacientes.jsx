import Paciente from "./Paciente";

function ListadoPacientes({pacientes, setPaciente}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
        <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administrar tus {''}<span className="font-bold text-indigo-600">pacientes y citas</span></p>
      {pacientes.map(paciente=>
          <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}/>
     )}
        </>
      ):(<>
      <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Comienza agregando {''}<span className="font-bold text-indigo-600">pacientes y citas</span></p>
      </>)}
      
    </div>
  )
}

export default ListadoPacientes;