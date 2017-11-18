const array =[1,2,3];
const obj = {};
const tvShows = [
    {
        Id: 1,
        titulo: 'LQ1',
        anio: 2017,
        pais: 'USA'
    },{
        Id: 2,
        titulo: 'LQ2',
        anio: 2015,
        pais: 'GT'
    }
]

obj.getArray =(req,res,next)=>{
    res.send(tvShows);
},

obj.postArray=(req,res,next)=>{
    tvShows.push(req.body);
    res.send(tvShows);
};

obj.getById =(req,res,next) => {
    let tvFind = tvShows.find((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id));

    if(!tvFind)
    {
        return res.send({error: `Show: ${req.params.id}, no encontrado`});
        //return res.send({error: 'Show: '+req.params.id + ', no encontrado'});
    }
    res.send(tvFind);
} 

obj.deleteTVShow = (req,res,next) => {
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }
    let result = tvShows.splice(indexTvShow,1);
    res.send({r:indexTvShow});
}

obj.updateTVShow = (req,res,next) => {
    let indexTvShow = tvShows.findIndex((tvShow) =>  tvShow.Id === Number.parseInt(req.params.id))
    if(indexTvShow < 0)
    {
        return res.send({error: `Id: ${req.params.id}, no encontrado`});
    }  


    //let tvShow = tvshow[indexTvShow];
    //tvshow.anio = req.body.anio;
    //tvshow.pais = req.body.pais;
    //tvshow.titulo = req.body.titulo;

    //tvShows[indexTvShow] = tvshow;

    
    //res.send(tvShows);
};

// const buidTVShow = (id,body) => {
//     return {
//         Id : id,
//         anio : body.anio,
//         pais: bodu.pais,

//     }
// }



module.exports = obj;