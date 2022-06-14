import { format } from 'date-fns';
import { zonedTimeToUtc } from 'date-fns-tz';

import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();


const handler = async (req, res) => {

    if(req.method === 'POST') {
        const { body } = req;

        const date = new Date()
        const Fecha_hora = format(zonedTimeToUtc(date, 'America/Bogota'), "yyyy-MM-ddcccccHH:mm:ssxxx")

        const data = {
            First_Name: body.First_Name,
            Last_Name: body.Last_Name,
            Email: body.Email,
            Phone: body.Phone,
            Fecha_hora,
            Tu_solicitud_es_para: body.Tu_solicitud_es_para,
            Tipo_de_sistema: body.Tipo_de_sistema,
            C_mo_nos_conociste: body.C_mo_nos_conociste,
            Etapa_Proceso_de_Prospecci_n: body.Etapa_Proceso_de_Prospecci_n
        }
        // console.log(data)
        const response = await zoho.addNewEntityModule(data)
        // const response = 'exito'
    
        res.status(200).json(response)
    } else {
        res.status(500).json({
            message: `Method ${req.method} not allowed`
        })
    }
}

export default handler;