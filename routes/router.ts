import {Router, Request, Response} from 'express';

const router = Router();    // Para crear el servicio REST

router.get('/mensajes', (req: Request, res: Response) => {
    res.json({
        ok: true,
        mensaje: 'Get ok',
    })
});
router.post('/mensajes', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const pie     = req.body.pie;
    
    res.json({
        ok: true,
        cuerpo,
        pie
    });
});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        cuerpo,
        de,
        id
    });
});

export default router;