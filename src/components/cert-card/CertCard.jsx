import styles from './CertCard.module.css'

export const CertCard = (props) => {

    return (
        <div className={ styles.cert_card }>
            <p className={styles.cert_name}>{props.cert.NAME}</p>

            <button className={styles.order_button} type='button' 
            onClick={() => {props.setCurrentCert(props.cert); props.setCurrentPage('ContactsForm')}}>
                Оформить
            </button>
        </div>
    );
}