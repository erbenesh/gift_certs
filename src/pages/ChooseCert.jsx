import styles from './ChooseCert.module.css';

import { CertCard } from '../components/cert-card/CertCard'

export const ChooseCert = (props) => {

  return (
    <main>

      <h1>Выберите сертификат</h1>

      <div className={styles.certs_grid}>

        {
          props.certsArray.map(el => <CertCard key={el.ID} cert={el} 
                                                setCurrentCert={props.setCurrentCert} 
                                                setCurrentPage={props.setCurrentPage}
                                                />)
        }

      </div>
      
    </main>
  );
}