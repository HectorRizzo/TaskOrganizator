

export class ApiFootball{

     key='7e57fba480bca43c0ff661afd8f77969'
     name="null"
     constructor(){
        let getData = async () => {

        let name=""
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", this.key);
        myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        const data= await fetch("https://v3.football.api-sports.io/leagues?id=39", requestOptions)
        .then(response =>  response.json())
        .then(result => 
            {
                var resu= result.response[0];
                name=resu.country.name;
                this.name=name;
            }
        )
        .catch(error => console.log('error', error))

    }
     }

    

    getName(){
        console.log(this.name)
        return this.name;
    }






}   
