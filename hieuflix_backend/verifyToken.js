import jwt from 'jsonwebtoken';

const verify = (req,res,next) => {
    
    //todo; da chay ngon
    let header = req.get('authorization');
    if(!header) {
        header = req.headers.token;
    }
    // console.log('header: ' + header);
    if(header){
        const token = header.split(" ")[1];

        jwt.verify(token, process.env.SECRET_KEY,(err, user)=>{
            if(err) {
                res.status(403).json('Token is not valid');
            }
            req.user = user;
            next(err);
        })
    } else {
        return res.status(401).json('Not authenticated');
    }
}

export default verify;