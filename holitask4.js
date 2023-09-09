function call()
{
    if(eyepic.title=="Hide")
    {
        eyepic.src="images/showpwd.png" 
        eyepic.title="Show"
        pwd.type='text'
    }
    else{
        eyepic.src="images/hidepwd.png"
        eyepic.title="Hide"
        pwd.type='password'
    }
}