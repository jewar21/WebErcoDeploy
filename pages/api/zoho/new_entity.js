import nextConnect from 'next-connect';
import multer from 'multer';
import FormData from 'form-data';
import fs from 'fs';
import path from 'path';

import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();

// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.
//memoryStorage
const upload = multer({
    storage: multer.diskStorage({
        destination: './public/uploads',
        filename: (req, file, cb) => cb(null, file.originalname),
        // preservePath: (req, file, cb) => cb(null, file.path),
    }),
});

const newEntity = nextConnect({
    onError(error, req, res) {
        console.log('error', error)
        res.status(501).json({ message: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
    },
})

// Returns middleware that processes multiple files sharing the same field name.
const uploadMiddleware = upload.single('image');
newEntity.use(uploadMiddleware); // Adds the middleware to Next-Connect

//Adj_ntanos_una_foto_completa_de_tu_ltima_factura

newEntity.post( async (req, res) => {
    const { body } = req;

    console.log('body',body)
    console.log('body',typeof body)
    console.log('file',req.file)

    const date = new Date()
    const Fecha_hora = format(zonedTimeToUtc(date, 'America/Bogota'), "yyyy-MM-dd'T'HH:mm:ssxxx")

    const data = {
        ...body,
        Fecha_hora,
        Etapa_Proceso_de_Prospecci_n: "Contacto Frío"
    }

    // const data = new FormData();

    // for ( let key in body ) {
    //     data.append(key, body[key])
    // }

    // data.append('Fecha_hora', Fecha_hora)
    // data.append('Etapa_Proceso_de_Prospecci_n', 'Contacto Frío')
    // data.append('Adj_ntanos_una_foto_completa_de_tu_ltima_factura', fs.createReadStream( path.extname(req.file.originalname) ))

    console.log('dataSend',data)

    // console.log('imagen', fs.createReadStream( path.extname(req.file.originalname) ))
    // console.log('imagen', path.extname(req.file.originalname) )
    // const file = req.file && fs.createReadStream( path.join(__dirname, './public/uploads') );
    const file = req.file && req.file;

    const response = await zoho.addNewEntityModule(data, file)
    // const response = 'exito'
    
    res.status(200).json(response)
} )

export default newEntity;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};