import Paciente from "./Paciente";

function ListadoPacientes() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">Administrar tus {''}<span className="font-bold text-indigo-600">pacientes y citas</span></p>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>
      <Paciente/>

    </div>
  )
}

export default ListadoPacientes;