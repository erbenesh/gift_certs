import { useForm } from "react-hook-form"

import styles from './ContactsForm.module.css'

export const ContactsForm = (props) => {

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <div className={styles.contacts_form}>

            <form onSubmit={handleSubmit(props.createOrder)}>

                <button className={styles.back_button} type="button" onClick={() => props.setCurrentPage('ChooseCert')}> {"<"} Назад</button>

                <h2>Оформление заказа:</h2>

                <span><p>{props.currentCert.NAME}</p><p>{props.currentCert.PRICE}</p></span>

                <input type="text" name="ClientName" placeholder={errors.clientName?.type === "required" ? 'Имя введено неверно' : "Ваше имя"}
                {...register("clientName", { required: true })}
                aria-invalid={errors.clientName ? "true" : "false"}
                />

                <input type="tel" name="Phone" placeholder={errors.phone ? errors.phone.message : "+7 (999) 999-99-99"} pattern="[0-9]{11}"
                {...register("phone", { required: "Номер телефона введен неверено" })}
                aria-invalid={errors.phone ? "true" : "false"}
                />

                <input type="email" name="Email" placeholder={errors.mail ? errors.mail.message : "name@example.com"} pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                {...register("mail", { required: "Почта введена неверено" })}
                aria-invalid={errors.mail ? "true" : "false"}
                />

                <button className={errors.clientName || errors.phone || errors.mail ? styles.to_pay_button_off : styles.to_pay_button} type="submit"> ОПЛАТИТЬ {props.currentCert.PRICE}</button>

            </form>

        </div>
    );
}