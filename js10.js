function display()
{
    // alert(cars.selectedIndex)
    // alert(cars.options[cars.selectedIndex].text)
    // alert(cars.options[cars.selectedIndex].value)
    //cn.innerHTML=cars.value
    var i=cars.selectedIndex
    var cname=cars.options[i].text
    var price=cars.options[i].value
    // or
    // var price=cars.value
    var pic="images/"+cname+".png"
    cn.innerHTML=cname
    cp.innerHTML=price
    cpic.src=pic


    
}