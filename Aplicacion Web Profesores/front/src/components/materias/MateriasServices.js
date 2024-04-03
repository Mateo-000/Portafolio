import axios from "axios";

async function alta(data){
    return await axios.post('http://localhost:4000/api/materias', data)
};

async function baja(id){
    const res = await axios.delete('http://localhost:4000/api/materias/'+id.toString())
    return res.status === 200
};


async function modificacion(id, data) {
    return await axios.put(`http://localhost:4000/api/materias/${id}`, data);
  }
  

async function consulta(data){
    return await axios.get('http://localhost:4000/api/materias', {
        params: data,
    });
};

export { alta, baja, modificacion, consulta,}