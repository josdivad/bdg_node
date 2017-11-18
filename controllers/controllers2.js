module.exports = {
    getArray:(req,res,next)=>{
        let array = [1,2,3];
        res.send(array);
    },
    postArray:(req,res,next)=>{
        array.push(req.body.number);
        res.send(array);
    }

}