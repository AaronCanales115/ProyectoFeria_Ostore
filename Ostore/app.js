const items =document.getElementById('items');
const templateCard = document.getElementById('card')
const fragment = document.createDocumentFragment();

/*document.addEventListener('DOMContentLoaded', () =>{
fetchData()
});

const fetchData = async () =>{
    try {
       const res = await fetch('Lista.json');
       const data = await res.json();
       pintarCards(data);
        
    } catch (error) {
     console.log(error);   
    }
}*/
items.addEventListener('click', e => {
    addCarrito(e);
})

const addCarrito = e =>{
    console.log(e.target);
}

const pintarCards = data =>{
    console.log(data);
    data.forEach(producto =>{
        //templateCard.querySelector('fil').setAttribute("class","fil "+ producto.Categoria)
      //  templateCard.querySelector('.Nombre').textContent = producto.Categoria;
      //  templateCard.querySelector('p').textContent = producto.Descripcion;
        templateCard.querySelector('span').textContent = '$ '+ producto.PrecioVenta;
       // templateCard.querySelector('img').setAttribute("src",producto.URL);
       // templateCard.querySelector('a').dataset.id = producto.id;
       
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    })
    items.appendChild(fragment);
}