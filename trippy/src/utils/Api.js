
 const config = {
    host: "http://localhost:3002",
    };

class Api{
   
getHomeData(){
    const url = `${config.host}/api/home`;
    return fetch(url)
        .then(res => res.json())
        .then(res => ({
             cities: res.cities }))
            ;
}
       
}
export default new  Api()


