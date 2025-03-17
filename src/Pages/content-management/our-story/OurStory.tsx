import React from 'react';
import styles from './OurStory.module.scss';
import Button from '../../../components/button/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const OurStory: React.FC = () => {
  return (
    <div className={styles.executiveMessage}>
      {/* Text Area Section */}
      <label className={styles.label}>نص القصة</label>
      <textarea
        className={styles.textarea}
        placeholder='نحن مستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في'
      />

      <div className='row mb-4'>
        <div className='col-md-6'>
          <span>الصور التوضيحية</span>
          <div className={`${styles.fileUpload} rounded-pill form-control`}>
            <label className={styles.fileLabel}>
              <input type='file' className={styles.fileInput} multiple />
              <span>image01.jpeg, image02.jpeg</span>
              <AttachFileIcon className={styles.fileIcon} />
            </label>
          </div>
        </div>
        <div className='col-md-6'>
          <span>فيديو توضيحي</span>
          <div className={`${styles.fileUpload} rounded-pill form-control`}>
            <label className={styles.fileLabel}>
              <input
                type='file'
                className={styles.fileInput}
                accept='video/*'
              />
              <span>video.mp4</span>
              <AttachFileIcon className={styles.fileIcon} />
            </label>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <Button title='نشر على الموقع' color='btn-primary' />
        </div>
        <div className='col-md-6'>
          <Button title='حفظ التغييرات' color='btn-outline-primary' />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
