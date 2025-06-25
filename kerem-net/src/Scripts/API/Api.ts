

const API:string = "http://localhost:3000/";
const datafetch(API: string)
    .then((response: Response) => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching data:', error));