import api from "@/services/api";

export async function getCategory(id: number | string) {
    const response = await api.get('/categories', { params: { id: id }})
      .then(res => res.data)
      .then(response => response[0].title)
      .catch((error) => {
        return new Response(
          'There has been a problem with your fetch operation getCategory: ' + error.message,
          { status: 500 }
        );
      })
      
    return response;
}

export async function getAllCategories() {
    const response = await api.get('/categories')
      .then(res => res.data)
      .then(response => response)
      .catch((error) => {
        return new Response(
          'There has been a problem with your fetch operation getAllCategories: ' + error.message,
          { status: 500 }
        );
      })
      
    return response;
}