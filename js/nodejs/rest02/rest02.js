var axios = require('axios');

axios.get('http://localhost:8081/listUsers')
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });