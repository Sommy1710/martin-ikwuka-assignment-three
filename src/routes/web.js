import {Router} from 'express'
const router = Router();

//to create an article
router.post('/',(req, res) =>
{
    returnbres.json({success: true, message: 'Martin has created the article sucessfully'});
});


//to update an article
router.put('/:id', (req, res)=>
{
    const {id} = res.params;
    return res.json({success: true, message: `article with id ${id} updated`});
});


//to delete an article
router.delete('/:id', (req, res)=>
{
    const {id} = req.params;
    return res.json({success: true, message: `article with id ${id} deleted`});
});


//to get an article
router.get('/', (req, res) => 
{
    return res.json({success: true, message: 'all articles'});
})

router.get ('/:id', (req, res) =>
{
    const {id} = req.params;
    return res.json({success: true, message: `article with id ${id}`});
});

export const appRouter = router;