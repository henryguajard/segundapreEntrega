
//constructor de objetos
class  productoDeccoHouse{
    constructor(id,nombre,precio,cantidad){
        this.id =id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad; 
    }
    
}
//array de objetos 
let productosDeccoHouse =[
{id : 01, nombre: `Juego living de terraza Sofia`, precio: 499990, cantidad: 10},
{id : 02, nombre: `Juego living de terraza Home Alaya`, precio: 599990, cantidad: 10},
{id : 03, nombre: `Juego living de terraza Arrayan Premium`, precio: 699990, cantidad: 10},
{id : 04, nombre: `Mesa bar TuHome`, precio: 1199990, cantidad: 10},
{id : 05, nombre: `Mesa Amazonas negro`, precio: 1299990, cantidad: 10},
{id : 06, nombre: `Mesa blue dark`, precio: 1399990, cantidad: 10},
{id : 07, nombre: `Sofa slow`, precio: 499990, cantidad: 10},
{id : 08, nombre: `Sofa Kunza`, precio: 399990, cantidad: 10},
{id : 09, nombre: `Sofa Essential`, precio: 299990, cantidad: 10}
];

// .map para modificar los precios de los productos 
//oferta del mes de febrero 14% de descuento a todos los productos
let preciosDescuento = productosDeccoHouse.map(item => {
    return{
     id :item.id,
     nombre :item.nombre,
     precio :item.precio- item.precio *0.14,
     cantidad : item.cantidad 
    }
 })
 //console.log(precios);

//creando nuevos arrays para las categorias con .filter
let filtrarJuegoTerraza = preciosDescuento.filter( item => item.id <=3);
//console.log(filtrarJuegoTerraza);

let filtrarMesas = preciosDescuento.filter( (item) => item.precio >=1000000  );
//console.log(filtrarMesas);

let filtrarSofas = preciosDescuento.filter( item => item.id >=7);
//console.log(filtrarSofas);


let elegirCategoria = ``;
let mensaje =``;
let encontrado =``;
let totalStock =``;
let cantidadAComprar =``;

//promo mes del amor
 function promo() {

    alert(`Welcome to DeccoHouse :D`);
    alert(`en el mes del amor ofrecemos 14% de descuento
 en todos nuestros productos solo debes
  ingresar tu Nombre para obtenerlo
 compra amor compra en 
 DeccoHouse :D`);

}
promo()

//bienvenida
bienvenida()

function bienvenida() {
   alert(`¡Welcome to DeccoHouse:D !`);
  }

for (let i = 0; i < 100; i++) {
   let nombre = prompt("Ingrese su nombre para obtener un descuento del mes del Amor");
   while (Number(nombre)) {
     nombre = parseInt(
     prompt(`ese no es un nombre vuelve a intentarlo`));
    }
    if(isNaN(nombre)) {
     alert(`felicidades  ${nombre} obtienes 14% de descuento`);
     break;
    }
}
bienvenida()  


//categorias y demas
    function elegirCategorias (){  
         let elegirCategoria= parseInt(prompt(`ingrese el N de la categoria que decea comprar :
         1. Juegos de living
         2.Mesas
         3.sofa`));
         if(elegirCategoria ===1){
// recorriendo array con forEach
        filtrarJuegoTerraza.forEach(item => {

         alert(`${item.nombre} ${item.precio}`);
            
        }); 
         let encontradoTerraza =prompt(`selecciona el NUMERO del Juego living de terraza que desees:
        1.Juego living de terraza Sofia
         antes $499990 ¡AHORA! :$429991.4
        2.Juego living de terraza Home Alaya 
        antes $599990  ¡AHORA! :$515991.4
        3.Juego living de terraza Arrayan Premium 
         antes $699990 ¡AHORA! :$601991.4
          `);
        if (encontradoTerraza ==1){
 // encontrar un elemento dentro del array con .find
         let encontradoT =filtrarJuegoTerraza.find(item => item.id ==1);
           mensaje =`
         Juegos de Terraza DeccoHouse  
            
         id:${encontradoT.id}
         nombre:${encontradoT.nombre}
         precio:${encontradoT.precio}
             `;
          (alert(mensaje)); 
          let cantidadAComprar= parseInt(prompt(`Juego living de terraza Sofia precio: $429991.4
          ingrese la cantidad que necesita`))
         if( (cantidadAComprar<=10)){
         let mensSofia =cantidadAComprar;
         let filtrarSofia = preciosDescuento.filter(item =>item.id===1);
         let totalStock = filtrarSofia.map(item =>{
          return{
            id :item.id,
            nombre :item.nombre,
            precio :item.precio,
            cantidad : item.cantidad  - mensSofia

          }
         
         });
         totalStock.forEach(item =>{
            alert(`del Juego living de terraza Sofia queda en el stock ${item.cantidad}`);
  
            }); 

         alert(`gracias por la compra`)
 
         }
         else {
            alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
         }

        }
        
         else if (encontradoTerraza==2){

 // encontrar un elemento dentro del array con .find
         let encontradoT =filtrarJuegoTerraza.find(item => item.id ==2);
         mensaje =`
        Juegos de Terraza DeccoHouse  
       
         id:${encontradoT.id}
         nombre:${encontradoT.nombre}
         precio:${encontradoT.precio}
         `;
         (alert(mensaje));
         let cantidadAComprar= parseInt(prompt(`Juego living de terraza Home Alaya precio: $515991.4
         ingrese la cantidad que necesita`))
         if((cantidadAComprar<=10)){
         let mensAlaya =cantidadAComprar;
         let filtrarAlaya = preciosDescuento.filter(item =>item.id===2);
         let totalStock = filtrarAlaya.map(item => {
         return{
            id :item.id,
            nombre :item.nombre,
            precio :item.precio,
            cantidad : item.cantidad  - mensAlaya
        }

        });
         totalStock.forEach(item => {
         alert(` del Juego living de terraza Home Alaya queda en el stock ${item.cantidad}`);

        });
         alert(`gracias por la compra`)
        }
         else {
         alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }
         }
        
         else if (encontradoTerraza==3){
 // encontrar un elemento dentro del array con .find
         let encontradoT =filtrarJuegoTerraza.find(item => item.id ==3);
         mensaje =`
         Juegos de Terraza DeccoHouse  

         id:${encontradoT.id}
         nombre:${encontradoT.nombre}
         precio:${encontradoT.precio}
         `;
         (alert(mensaje));
         let cantidadAComprar= parseInt(prompt(`Juego living de terraza Arrayan Premium precio: $601991.4
         ingrese la cantidad que necesita`));
         if((cantidadAComprar<=10)){
         let mensArrayan = cantidadAComprar;
         let filtrarArrayan = preciosDescuento.filter(item =>item.id===3);
         let totalStock = filtrarArrayan.map(item => {
         return{
            id :item.id,
            nombre :item.nombre,
            precio :item.precio,
            cantidad : item.cantidad  - mensArrayan
        }
        });
        totalStock.forEach(item => {
            alert(`del Juego living de terraza Arrayan Premium queda en el stock ${item.cantidad}`);
        });  
        alert(`gracias por la compra`)
        }
        else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }

        }
         
        else{
        alert(`producto no existe en la categoria vuelva a cargar`)
        }   

    }
         if(elegirCategoria ===2){
         filtrarMesas.forEach((item) => {
            alert(`${item.nombre} ${item.precio}`);
        });
         let encontradoMesas=prompt(`selecciona el NUMERO de las Mesas que desees:
         4.Mesa bar TuHome
         antes $1199990 ¡AHORA! :$1031991.4
         5.Mesa Amazonas negro
         antes $1299990  ¡AHORA! :$1117991.4
         6.Mesa blue dark
         antes $1399990 ¡AHORA! :$1203991.4
         `);
        if(encontradoMesas==4){
         let encontradoM= filtrarMesas.find(item => item.id ==4)
         mensaje =`
            Mesas DeccoHouse  
            
            id:${encontradoM.id}
            nombre:${encontradoM.nombre}
            precio:${encontradoM.precio}
             `;
         (alert(mensaje)); 
         let cantidadAComprar= parseInt(prompt(`Mesa bar TuHome precio: $1031991.4
         ingrese la cantidad que necesita`))
         if ((cantidadAComprar<=10)){
         let mensMb= cantidadAComprar;
         let filtrarMbar= preciosDescuento.filter(item =>item.id===4);
         let totalStock =filtrarMbar.map(item =>{
            return{
                id :item.id,
                nombre :item.nombre,
                precio :item.precio,
                cantidad : item.cantidad  - mensMb
            }  
         });
         totalStock.forEach(item =>{
            alert(`de Mesa bar TuHome queda en el stock ${item.cantidad}`);
         });
         alert(`gracias por la compra`)
         }
         else {
            alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
         }

        }
       
         else if(encontradoMesas==5){
          let encontradoM= filtrarMesas.find(item => item.id ==5)
         mensaje =`
         Mesas DeccoHouse  
        
         id:${encontradoM.id}
         nombre:${encontradoM.nombre}
         precio:${encontradoM.precio}
         `;
         (alert(mensaje)); 
         let cantidadAComprar= parseInt(prompt(`Mesa Amazonas negro precio: $1117991.4
         ingrese la cantidad que necesita`))
         if(cantidadAComprar <=10){
         let mensAmazN =cantidadAComprar;
         let filtrarAmazN = preciosDescuento.filter(item =>item.id===5);
         let totalStock =filtrarAmazN.map(item =>{
            return{
                id :item.id,
                nombre :item.nombre,
                precio :item.precio,
                cantidad : item.cantidad  - mensAmazN
            }  
         });
         totalStock.forEach(item =>{
            alert(` de Mesa Amazonas negro queda en el stock ${item.cantidad}`);
         });
         alert(`gracias por la compra`);

       }
       else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
       }
       }
    
        else if(encontradoMesas==6){
         let encontradoM= filtrarMesas.find(item => item.id ==6)
         mensaje =`
         Mesas DeccoHouse  
        
         id:${encontradoM.id}
         nombre:${encontradoM.nombre}
         precio:${encontradoM.precio}
         `;
         (alert(mensaje)); 
         let cantidadAComprar= parseInt(prompt(`Mesa blue dark precio: $1203991.4
         ingrese la cantidad que necesita`))
       if(cantidadAComprar <=10){
         let mensMblue=cantidadAComprar;
         let filtrarMblue= preciosDescuento.filter(item =>item.id===6);
         let totalStock=filtrarMblue.map(item =>{
            return{
                id :item.id,
                nombre :item.nombre,
                precio :item.precio,
                cantidad : item.cantidad  - mensMblue
            }
        });
        totalStock.forEach(item =>{
            alert(`de Mesa blue dark  queda en el stock ${item.cantidad}`);
         });
         alert(`gracias por la compra`);
        }
       else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }
      
        }
         
        else{
        alert(`producto no existe en la categoria vuelva a cargar`)
        }       
    }

        else if(elegirCategoria ===3){
         filtrarSofas.forEach(item => {
            alert(`${item.nombre} ${item.precio}`);
        });
         let encontradoSofas=prompt(`selecciona el NUMERO Sofa que desees:
         7.Sofa slow
         antes $499990 ¡AHORA! :$429991.4
         8.Sofa Kunza
         antes $399990  ¡AHORA! :$343991.4
         9.Sofa Essential
         antes $299990 ¡AHORA! :$257991.4
          `);
         if(encontradoSofas==7){
 // encontrar un elemento dentro del array con .find
         let encontradoS = filtrarSofas.find(item => item.id ==7);   
         mensaje =`
         sofas DeccoHouse  
       
        id:${encontradoS.id}
         nombre:${encontradoS.nombre}
        precio:${encontradoS.precio}
         `;
        (alert(mensaje));  
         let cantidadAComprar= parseInt(prompt(`Sofa slow precio: $429991.4
         ingrese la cantidad que necesita`));
        if(cantidadAComprar <=10){
         let mensSslow=cantidadAComprar;
         let filtrarSslow=preciosDescuento.filter(item =>item.id===7);
         totalStock= filtrarSslow.map( item =>{
        return{
            id :item.id,
            nombre :item.nombre,
            precio :item.precio,
            cantidad : item.cantidad  - mensSslow
        }

        });
        totalStock.forEach(item =>{
        alert(`del Sofa slow  queda en el stock ${item.cantidad}`);
        });
         alert(`gracias por la compra`);

        }
      else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }
     
     }

     else if(encontradoSofas==8){
         // encontrar un elemento dentro del array con .find
         let encontradoS = filtrarSofas.find(item => item.id ==8);   
         mensaje =`
         sofas DeccoHouse  
        
        id:${encontradoS.id}
        nombre:${encontradoS.nombre}
        precio:${encontradoS.precio}
         `;
        (alert(mensaje));
        let cantidadAComprar= parseInt(prompt(`Sofa Kunza precio: 343991.4
         ingrese la cantidad que necesita`));
         if(cantidadAComprar <=10){
         let mensSkunza =cantidadAComprar;
         let filtrarSkunza =preciosDescuento.filter(item =>item.id===8);
         totalStock= filtrarSkunza.map(item =>{
         return{
            id :item.id,
            nombre :item.nombre,
            precio :item.precio,
            cantidad : item.cantidad  - mensSkunza

         }
        });
     totalStock.forEach(item =>{
        alert(`del Sofa Kunza queda en el stock ${item.cantidad}`);
        });
        alert(`gracias por la compra`);
        }
        else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }

     }
       else if(encontradoSofas==9){
 // encontrar un elemento dentro del array con .find
         let encontradoS = filtrarSofas.find(item => item.id ==9);   
         mensaje =`
         sofas DeccoHouse  
        
         id:${encontradoS.id}
         nombre:${encontradoS.nombre}
         precio:${encontradoS.precio}
         `;
         (alert(mensaje));
         let cantidadAComprar= parseInt(prompt(`Sofa Essential precio: $257991.4
         ingrese la cantidad que necesita`));
        if(cantidadAComprar <=10){
         let mensSessent= cantidadAComprar;
         let filtrarSessent= preciosDescuento.filter(item =>item.id===9);
         totalStock= filtrarSessent.map(item =>{
         return{
         id :item.id,
         nombre :item.nombre,
         precio :item.precio,
         cantidad : item.cantidad  - mensSessent

        }

        });
         totalStock.forEach(item =>{
         alert(` del Sofa Essential  queda en el stock ${item.cantidad}`);
        });
         alert(`gracias por la compra`);
        }
        else {
        alert(`cantidad maxima de compra 10 unid vuelva a cargar`) 
        }

        }
        else{
        alert(`categoria no encontrada vuelva a cargar :(`);
    }  
  }
  else{
   alert(`categoria no encontrada vuelva a cargar :( `)
  }

}
elegirCategorias()











 
    





    
    








    
   
    





























