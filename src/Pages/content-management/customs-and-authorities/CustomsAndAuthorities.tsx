import styles from './CustomsAndAuthorities.module.scss';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Button from '../../../components/button/Button';

const CustomsAndAuthorities = () => {
  return (
    <div className={`${styles.customAndAuthorities} container`}>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <label>اسم الجهة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='هيئة الاتحاد الجمركي مجلس التعاون لدول الخليج العربية'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>شعار الجهة</span>
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
        <div className='col-md-6 mb-4'>
          <label>اسم الجهة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='هيئة الاتحاد الجمركي مجلس التعاون لدول الخليج العربية'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>شعار الجهة</span>
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
        <div className='col-md-6 mb-4'>
          <label>اسم الجهة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='هيئة الاتحاد الجمركي مجلس التعاون لدول الخليج العربية'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>شعار الجهة</span>
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
        <div className='col-md-6 mb-4'>
          <label>اسم الجهة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='هيئة الاتحاد الجمركي مجلس التعاون لدول الخليج العربية'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>شعار الجهة</span>
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
        <div className='col-md-6 mb-4'>
          <label>اسم الجهة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='هيئة الاتحاد الجمركي مجلس التعاون لدول الخليج العربية'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>شعار الجهة</span>
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

export default CustomsAndAuthorities;
