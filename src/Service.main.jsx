import { useState } from 'react'

import { useMutation, useQuery } from '@tanstack/react-query';
import { certsService } from "./services/cert.service";
import { ChooseCert } from './pages/ChooseCert';
import { ContactsForm } from './pages/ContactsForm';
import { Pay } from './pages/Pay';

export const Service = () => {

    const { data, isPending, error } = useQuery({
        queryKey: ['get certs'],
        queryFn: () => certsService.getCerts()
    });

    const mutNewOrder = useMutation({
        mutationKey: ['create order'],
        mutationFn: (order) => certsService.postCurrentCert(order),
        onError: console.log(error)
    });
  
    const [ currentCert, setCurrentCert ] = useState(null);

    const [ currentPage, setCurrentPage ] = useState('ChooseCert')
  
    const certsArray = isPending ? [] : data.data;
  
    console.log(certsArray);
  
    console.log(currentCert);

    const createOrder = () => {
        let inputAll = Array.from(document.querySelectorAll('input'));
        let obj = {};

        let checkFieldsLength = inputAll.every((el) => el.value.length);

        if (checkFieldsLength) {
            for (const input of inputAll) {
                obj[input.name] = input.value;
            }

            for (const param in currentCert) {
                obj[param] = currentCert[param];
            }

            mutNewOrder.mutate(obj);

            setCurrentPage('Pay');

            return console.log('Заказ: ', obj, 'создан');
        }
        return alert('Не все поля заполнены');
    }

    switch (currentPage) {
        case 'ChooseCert':
            return <ChooseCert certsArray={certsArray} setCurrentCert={setCurrentCert} setCurrentPage={setCurrentPage}/>
        case 'ContactsForm':
            return <ContactsForm createOrder={createOrder} currentCert={currentCert} setCurrentPage={setCurrentPage}/>
        case 'Pay':
            return <Pay setCurrentPage={setCurrentPage}/>
        default:
            return <div>Страница не найдена</div>
    }
}