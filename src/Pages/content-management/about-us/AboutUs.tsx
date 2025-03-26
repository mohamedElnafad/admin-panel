import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './AboutUs.module.scss';
import Button from '../../../components/button/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const AboutUs = () => {
  return (
    <div className={`container ${styles.aboutUs}`}>
      <div className='row'>
        <div className='col-md-6 mb-4'>
          <label className={styles.label}>اسم الهيئة</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='+966 4561 1234'
          />
        </div>

        <div className='col-md-6 mb-4'>
          <label className={styles.label}>الموقع الجغرافي</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='+966 4561 1234'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <label className={styles.label}>الصور التوضيحية</label>
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
        <div className='col-md-12'>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>رابط القانون</label>
            <div
              className={`${styles.fileUpload} rounded-pill form-control position-relative`}
            >
              <InsertDriveFileIcon className={styles.pdfIcon} />
              <label className={styles.fileLabel}>
                <input type='file' className={styles.fileInput} multiple />
                <span>التقارير السنويه.pdf</span>
                <AttachFileIcon className={styles.fileIcon} />
              </label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <label className={styles.label}>التحليلات</label>
            <label />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>الرقم</label>
            <input
              type='number'
              className='form-control rounded-pill'
              value={200.0}
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>النص</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='دولار تبادل تجاري'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>الرقم</label>
            <input
              type='number'
              className='form-control rounded-pill'
              value={30}
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>النص</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='اتفاقيه تعزز النمو الاقتصادي'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>الرقم</label>
            <input
              type='number'
              className='form-control rounded-pill'
              value={40}
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>النص</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='سنه من الانجازات'
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>الرقم</label>
            <input
              type='number'
              className='form-control rounded-pill'
              value={6}
            />
          </div>
          <div className='col-md-6 mb-4'>
            <label className={styles.label}>النص</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='دول ف التعاون الاقتصادي'
            />
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

export default AboutUs;
