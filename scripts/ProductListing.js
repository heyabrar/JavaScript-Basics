const API = `https://api.escuelajs.co/api/v1/categories`;

const getData = ( ) =>{
   return fetch(API).then((res)=>{
        return res.json( );
    })
}

const handleGetData = ( ) =>{
    getData().then((res)=>{
        console.log(res)
        DisplayData(res)
    })
}
handleGetData( );

const DisplayData = (data) =>{

    data.forEach((item)=>{

        let box = document.createElement('div');

        let image = document.createElement('img');
        image.src = item.image

        let title = document.createElement('p');
        title.textContent = item.name

        box.append(image,title)
        document.getElementById('Products').append(box);
    })

}