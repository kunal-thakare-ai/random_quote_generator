import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/quotes',
    headers: {
        'X-Api-Key': 'Fjuxw/ROC+5wayUTWM8ojw==xMaG92RmgYMIzEE7'
      },
},)

