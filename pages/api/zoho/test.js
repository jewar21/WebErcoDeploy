import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();


const handler = async (req, res) => {

    if(req.method === 'GET') {
        const data = await zoho.getModuleRecord()
    
        const response = {
            message: 'Hola Mundo',
            data
        }
    
        res.status(200).json(response)
    } else {
        res.status(500).json({
            message: `Method ${req.method} not allowed`
        })
    }
}

export default handler;