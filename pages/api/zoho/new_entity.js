import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();

// TODO: Toca cambiar el back para recibir archivos
const handler = async (req, res) => {

    if(req.method === 'POST') {
        const { body } = req;

        console.log('body',body)
        console.log('body',typeof body)

        const date = new Date()
        const Fecha_hora = format(zonedTimeToUtc(date, 'America/Bogota'), "yyyy-MM-dd'T'HH:mm:ssxxx")

        const data = {
            ...body,
            Fecha_hora,
            Etapa_Proceso_de_Prospecci_n: "Contacto Frío"
        }

        // const data = body;
        // const data = new FormData();
        // data.append('Fecha_hora', Fecha_hora);
        // data.append('Etapa_Proceso_de_Prospecci_n', "Contacto Frío");
        // console.log('------------------------------------------------------------------------')
        console.log(data)
        // const response = await zoho.addNewEntityModule(data)
        const response = 'exito'
    
        res.status(200).json(response)
    } else {
        res.status(500).json({
            message: `Method ${req.method} not allowed`
        })
    }
}

export default handler;