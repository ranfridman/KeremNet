export const apiData = fetch('/api/data') // Relative path works due to proxy
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));