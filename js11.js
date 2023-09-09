function display()
{
    var i=cars.selectedIndex
    var cname=cars.options[i].text
    var price=parseInt(cars.value)
    var t=0
    if(price<1000000)
    {
        t=18
    }
    else
    {
        t=28
    }
    var pic=`images/${cname}.png`

    var tax=price*t/100
    var insu=price*t/100
    var np=price+tax+insu
    var output=`<table width="30%" cellspacing='0' cellpadding="5" border='1'>`
    output+="<caption><h2>On Road Price</h2></caption>"
    output+=`<tr><th><h3>${cname}</h3></th></tr>`
    output+=`<tr><th><h3><img src='${pic}' width='150'></h3></th></tr>`
    output+="</table>"
    
    output+=`<table width="30%" cellspacing='0' cellpadding="5" border='1'>`
    output+=`<tr><td><b>Base Price:</b></td><td>&#8377; ${price}</td></tr>`
    output+=`<tr><td><b>RTO[${t}%]:</b></td><td>&#8377; ${tax}</td></tr>`
    output+=`<tr><td><b>Insurance[10%]:</b></td><td>&#8377; ${insu}</td></tr>`
    output+=`<tr><td><b>Total Amount:</b></td><td>&#8377; ${np}</td></tr>`
    output+="</table>"

    result.innerHTML=output



}