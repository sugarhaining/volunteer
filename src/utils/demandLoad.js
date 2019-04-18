
function demandLoad(instance,lists){
    lists.forEach((item)=>{
         instance.component(`${item.name}`,item)
    })
}

export {
    demandLoad
}