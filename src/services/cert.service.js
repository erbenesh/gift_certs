import axios from "axios";

class CertsService {

    URL = 'https://sycret.ru/service/api/api';

    async getCerts() {
        const data = await axios.get(this.URL, { params: { ApiKey: '011ba11bdcad4fa396660c2ec447ef14', MethodName: "OSGetGoodList"} });

        return data.data;
    }

    async postCurrentCert(obj) {
        return await axios.post(this.URL, {
            Id: obj.ID,
            TableName: obj.TableName,
            PrimaryKey: obj.PrimaryKey,
            Price: obj.Price,
            Summa: obj.Summa,
            ClientName: obj.ClientName,
            Phone: obj.Phone,
            Email: obj.Email,
            PaymentTypeId: 2,
            UseDelivery: 0,
            IsGift: 0,
            MsgText: '',
            PName: obj.ClientName,
            PPhone: obj.Phone,
        }, { params: {
            ApiKey: '011ba11bdcad4fa396660c2ec447ef14', 
            MethodName: "OSSale"
        }});
    }

}

export const certsService = new CertsService();