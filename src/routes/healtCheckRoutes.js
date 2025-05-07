import express from 'express'

const router = express.Router();

// Funcion CallBack de tipo GET que responde un OK
const healtcheck = (req,res) =>{
    res.status(200).json({
        status: "Ok",
        message: "El servidor funciona correctamente"
    })
}

// Endpoint de tipo GET (http://localhost:5001/api/v0/hea)
router.get('/healtcheck',healtcheck)

export default router;