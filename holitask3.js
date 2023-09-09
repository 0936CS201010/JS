function moveRight()
{ 
    var i=l1.selectedIndex
    var txt=l1.options[i].text
    
    var opt=document.createElement('option')
    opt.text=txt
    l2.add(opt)

    l1.remove(i)
}
function moveLeft()
{ 
    var i=l2.selectedIndex
    var txt=l2.options[i].text
    
    var opt=document.createElement('option')
    opt.text=txt
    l1.add(opt)

    l2.remove(i)
}
function allMoveRight()
{   
    for(i=0;i<l1.options.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=l1.options[i].text
        l2.add(opt)
    }
    removeOptions(l1)
    
}


function allMoveLeft()
{   
    for(i=0;i<l2.options.length;i++)
    {
        var opt=document.createElement('option')
        opt.text=l2.options[i].text
        l1.add(opt)
    }
    removeOptions(l2)
    
}

function removeOptions(Arr)
{
    for(j=Arr.options.length-1;j>=0;j--)
    {
        Arr.remove(j)
    }
}
