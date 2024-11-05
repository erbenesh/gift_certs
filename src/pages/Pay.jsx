import styles from './Pay.module.css'


export const Pay = (props) => {

    return (
        <div className={styles.pay}>
            <button className={styles.back_button} type="button" onClick={() => props.setCurrentPage('ChooseCert')}>На главную</button>
            <p>Оплата...</p>
        </div>
    );
}