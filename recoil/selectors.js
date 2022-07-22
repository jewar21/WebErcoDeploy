import { selector } from "recoil";
import { dataAdditionalInformation, dataEnergyBill, dataGeneralInformation, dataInfrastructure, dataTypeOfSystem } from "./atoms";

export const dataToSendZoho = selector({
    key: "DataToSendZoho",
    get: ({ get }) => {
        const generalInformation = get(dataGeneralInformation)
        const infrastructure = get(dataInfrastructure)
        const typeOfSystem = get(dataTypeOfSystem)
        const energyBill = get(dataEnergyBill)
        const additionalInformation = get(dataAdditionalInformation)

        // const dataSend = {
        //     First_Name: generalInformation.firstName.value,
        //     Last_Name: generalInformation.lastName.value,
        //     Email: generalInformation.email.value,
        //     Phone: generalInformation.phone.value,
        //     Departamento: generalInformation.department.value.value,
        //     Tu_solicitud_es_para: infrastructure,
        //     Tipo_de_sistema: typeOfSystem ? `Solar ${typeOfSystem}` : null,
        //     Te_llega_factura_mensual_de_Energ_a: energyBill.reciveEnergyBill,
        //     Adj_ntanos_una_foto_completa_de_tu_ltima_factura: energyBill.image,
        //     C_mo_nos_conociste: additionalInformation.meetUs.value,
        //     Cu_ntanos_tu_necesidad: additionalInformation.moreInformation,
        // }

        const dataSend = new FormData();
        dataSend.append('First_Name', generalInformation.firstName.value);
        dataSend.append('Last_Name', generalInformation.lastName.value);
        dataSend.append('Email', generalInformation.email.value);
        dataSend.append('Phone', generalInformation.phone.value);
        dataSend.append('Departamento', generalInformation.department.value);
        dataSend.append('Tu_solicitud_es_para', infrastructure);
        dataSend.append('Tipo_de_sistema', typeOfSystem ? `Solar ${typeOfSystem}` : null);
        dataSend.append('Te_llega_factura_mensual_de_Energ_a', energyBill.reciveEnergyBill);
        dataSend.append('image', energyBill.image);
        dataSend.append('C_mo_nos_conociste', additionalInformation.meetUs.value);
        dataSend.append('Cu_ntanos_tu_necesidad', additionalInformation.moreInformation.value);

        return dataSend;
    }
})
