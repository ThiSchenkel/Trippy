


const config = {
    host: "http://localhost:3002"
}

const getHomeData = () => {
    return (fetch(`${config.host}/api/home`)
        .then((response) => response.json())
    )}

export default getHomeData;






// const config = {
//    host: "http://localhost:3002",
//    };//

//class Api{
//   
//getHomeData(){
//    const url = `${config.host}/api/home`;
//    return fetch(url)
//        .then(res => res.json())
//        .then(res => {
//           return res.cities })
//            ;
//}
//       
//}
//export default new  Api()


// new vaut dire instancier la classe 
//quand on déclare une classe , il faut l'instancier  pour pouvoir travailler avec ses methodes et propriétés