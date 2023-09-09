function getAmount()
{
    var total=0
    if(product1.checked)
    {
        total+=parseInt(product1.value)
    }
    
    if(product2.checked)
    {
        total+=parseInt(product2.value)
    }
    
    if(product3.checked)
    {
        total+=parseInt(product3.value)
    }

    result.innerHTML=total

}