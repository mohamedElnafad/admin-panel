import React from 'react';
import styles from './ExcutiveMessage.module.scss';
import Button from '../../../components/Button/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ExecutiveMessage: React.FC = () => {
  return (
    <div className={styles.executiveMessage}>
      <div className='container'>
        <div className='row mb-4'>
          <label className={styles.label}>نص كلمة المدير التنفيذي</label>
          <textarea
            className={`form-control ${styles.textarea}`}
            defaultValue='نحن نستخدم النص التجريبي هذا ليكون بمثابة نموذج العرض فقط، دون أن يكون له أي معنى حقيقي...'
          />
        </div>

        <div className='row mb-4 col-md-6'>
          <label className={styles.label}>صورة المدير التنفيذي</label>
          <div className={`${styles.fileUpload} rounded-pill form-control`}>
            <input type='file' className={`${styles.fileInput}`} />
            <label htmlFor='uploadFile' className={styles.fileLabel}>
              <span>image01.jpeg</span>
              <AttachFileIcon className={styles.fileIcon} />
            </label>
          </div>
        </div>

        <div className='col-md-12 text-center mt-3 d-flex gap-3 align-items-center justify-content-center'>
          <Button title='نشر على الموقع' color='btn-primary' />
          <Button title='حفظ التغييرات' color='btn-outline-primary' />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveMessage;
