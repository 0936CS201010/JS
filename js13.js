function fillProducts()
{
    var i=company.selectedIndex
    switch(i)
    {
        case 1:
            var lgp=[['-Select Product-',0],['Washing Machine',60000],['OLED TV',120000],['Micro Oven',45000]]
            fillDD(lgp)
            break
        case 2:
            var ssp=[['-Select Product-',0],['Washing Machine',30000],['OLED TV',340000],['S23',120000]]
            fillDD(ssp)
            break
        case 3:
            var sp=[['-Select Product-',0],['HiFi',50000],['LED',240000],['Camera',450000]]
            fillDD(sp)
            break
    }
}

function fillDD(prd)
{   removeOptions()
    for(i=0;i<prd.length;i++)
    {
        opt=document.createElement('option')
        opt.text=prd[i][0]
        opt.value=prd[i][1]
        products.add(opt)
    }
}

function removeOptions()
{
    for(j=products.options.length-1;j>=0;j--)
    {
        products.remove(j)
    }
}

function showProduct()
{
    var name=company.value+" "+products.options[products.selectedIndex].text
    var price=products.value
    var pic="/images/"+name+".png"
    var output=`<table cellspacing='0' cellpadding='5' width="20%" border='1'>`
    output+=`<tr><th>${name}</th></tr>`
    output+=`<tr><th><img src='${pic}' width='200'></th></tr>`
    output+=`<tr><th>&#8377; ${price}/-Only</th></tr></table>`
    result.innerHTML=output

}