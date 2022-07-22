import nextConnect from 'next-connect';

import fs from 'fs';
import path from 'path';
import fileupload from 'express-fileupload';

import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();

const newEntity = nextConnect({
    onError(error, req, res) {
        console.log('error', error)
        res.status(501).json({ message: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ message: `Method '${req.method}' Not Allowed` });
    },
})

// Middlewares load file
newEntity.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true,
}));

const saveImage = async ( files ) => {
    return new Promise((resolve, reject) => {
        const { image } = files;

        const uploadPath = path.join(__dirname, '../../../public/uploads/', image.name);
    
        image.mv(uploadPath, (err) => {
            if (err) {
                reject(err)
            }
            
            resolve(uploadPath)
        });
    })
}

newEntity.post( async (req, res) => {
    const { body, files } = req;

    const date = new Date()
    const Fecha_hora = format(zonedTimeToUtc(date, 'America/Bogota'), "yyyy-MM-dd'T'HH:mm:ssxxx")

    const data = {
        ...body,
        Fecha_hora,
        Etapa_Proceso_de_Prospecci_n: "Contacto Frío"
    }

    const pathImage = files && await saveImage(files);
    const file = (files && pathImage) && fs.createReadStream( pathImage );
    const response = await zoho.addNewEntityModule(data, file)

    if(files && pathImage) {
        fs.unlink(pathImage, (err) => {
            if(err) throw err;
            // console.log('File deleted');
        })
    }
    
    res.status(200).json(response)
} )

export default newEntity;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};