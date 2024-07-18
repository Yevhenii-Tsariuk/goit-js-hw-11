export function searchPhoto(query) {
     const API_KEY = '44790936-a9a83b9ad64ff44b33786cafe';
     return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`).then(
       (response) => {
         if (!response.ok) {
           throw new Error(response.status);
         }
         return response.json();
       }
     );
   }