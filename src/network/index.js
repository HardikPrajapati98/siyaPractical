export const apiRequest = {

    getReuest: (uri) => {
        return new Promise(async (resolve, reject) => {
          await  fetch(uri, {
                method: "GET",
                 headers: {
                    "Content-Type": "application/json",
                },
          }).then((response) => {
               resolve(response.json())
           }).catch((error) => {
                reject(error)
            })
        })
     }

}