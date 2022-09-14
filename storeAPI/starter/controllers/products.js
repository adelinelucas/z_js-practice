// on récupère le model
const Product = require('../models/product')
 
const getAllProductsStatic = async(req, res) => {
    // récupérer tous les produits qui ont pour valeur featured a true
    // const products = await Product.find({featured : true})
    // récupérer tous les produits
    const products = await Product.find({}).sort('-name price')
    // pour filter on ajoute le .sort et les clés de tri, chaque clé est séparée par un espace 
    //throw new Error('testing  async error')

    // recherche si les name contiennent 'a' / 'ab'
    // const search = 'ab';
    // const products = await Product.find({
    //     name: {$regex: search, $options: 'i'}, })

    res.status(200).json({products, nbHits:products.length})
}

// fonction qui va permettre de filtrer les résultats
const getAllProducts = async(req, res) => {
    //throw new Error('async error')
    console.log(req.query)
    const {featured, company, name, sort, fields, numericFilters} = req.query;

    // on créer un objet intermediaire pour vérouiller nos requêtes
    // cela va permettre d'avoir un filtre plus puissant pour cumuler les requêtes 
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === 'true' ? true: false;
    }
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex: name, $options: 'i'};
    }
    console.log(queryObject)
    let result = Product.find(queryObject)
    
    // numreric filter 
    if(numericFilters){
        console.log(numericFilters)
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }

        const regEx = /\b(<|>|=|<=|>=)\b/g
        let filters = numericFilters.replace(regEx, (match)=>`-${operatorMap[match]}-`)
        console.log(filters)
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item)=> {
            const[field, operator, value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]: Number(value)}
            }
        })
    }
    console.log(queryObject)
    //sort
    // trier les résultats selon certains critères
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }else{
       result = result.sort('createdAt'); 
    }

    // select
    // afficher seules certaines infos 

    if(fields) {
        const fiedlsList = fields.split(',').join(' ')
        result = result.select(fiedlsList)
    }

    // limit
    // limiter le nombre de résultat récupérer 

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1 ) * limit;

    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({products,nbHits:products.length})
}

module.exports = {
    getAllProducts, 
    getAllProductsStatic
}