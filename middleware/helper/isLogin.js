const isLogin=(req,res,next)=>{
    
    //kullanıcı kaydı yoksa
    const isLogin=true;
    
    if(isLogin)
     next();
    else 
     res.send("lütfen giriş yapın");
    };
    
    module.exports=isLogin;