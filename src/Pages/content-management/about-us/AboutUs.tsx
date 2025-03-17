import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './AboutUs.module.scss';
import Button from '../../../components/button/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const AboutUs = () => {
  return (
    <div className={`container ${styles.aboutUs}`}>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <label>اسم الهيئة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='+966 4561 1234'
          />
        </div>

        <div className='col-md-6 mb-4'>
          <label>الموقع الجغرافي</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='+966 4561 1234'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>الصور التوضيحية</span>
          <div
            className={`${styles.fileUpload} rounded-pill form-control position-relative`}
          >
            <InsertDriveFileIcon className={styles.fileIcon} />
            <label className={styles.fileLabel}>
              <input type='file' className={styles.fileInput} multiple />
              <span>image01.png</span>
              <AttachFileIcon className={styles.fileIcon} />
            </label>
          </div>
        </div>
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>رؤيتنا</label>
          <textarea
            className={styles.textarea}
            placeholder='نحن مستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في'
          />
        </div>
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>رسالتنا</label>
          <textarea
            className={styles.textarea}
            placeholder='نحن مستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في'
          />
        </div>
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>أهدافنا</label>
          <textarea
            className={styles.textarea}
            placeholder='نحن مستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في'
          />
        </div>

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

export default AboutUs;
