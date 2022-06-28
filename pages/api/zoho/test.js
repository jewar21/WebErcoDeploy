import nextConnect from 'next-connect';

import { ZohoAPI } from '../../../utils/zoho/config'

const zoho = new ZohoAPI();

const test = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
})

// Process a POST request
test.get( async (req, res) => {
    const data = await zoho.getModuleRecord()

    const response = {
        message: 'Hola Mundo',
        data
    }
    
    res.status(200).json(response);
});

export default test;