import api from "@/services/api";

export async function getCategory(id: number | string) {
    const response = await api.get('/categories', { params: { id: id }})
      .then(res => res.data)
      .then(response => response[0].title)
      .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>)
      
    return response;
}

export async function getAllCategories() {
    const response = await api.get('/categories')
      .then(res => res.data)
      .then(response => response)
      .catch((error) => <p className="text-white">Erro no fetch { error.message }</p>)
      
    return response;
}