import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import styles from './AddNewCommittee.module.scss';
import AddIcon from '@mui/icons-material/Add';
import DropDownList from '../../../components/dropdwon-list/DropDownList';
import Button from '../../../components/button/Button';

const AddNewCommittee = () => {
  return (
    <div className={`container ${styles.addNewCommittee}`}>
      <div className='row'>
        <div className={`col-md-12 mb-4`}>معلومات عن اللجنة</div>
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
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>وصف اللجنة</label>
          <textarea
            className={styles.textarea}
            placeholder='نحن نستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي. يتم استخدام هذا النوع من النصوص في
          التصاميم كبديل مؤقت للنصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع.'
          />
        </div>
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>المشاريع والأنشطة المميزة</label>
          <textarea
            className={styles.textarea}
            placeholder='نحن نستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي. يتم استخدام هذا النوع من النصوص في التصاميم كبديل مؤقت للنصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع.'
          />
        </div>
        <div className='d-flex justify-content-between align-items-center mb-4'>
          <div style={{ fontWeight: 'bold' }}>أعضاء الفريق</div>
          <button className='btn btn-primary d-flex align-items-center rounded-pill'>
            <AddIcon className='ms-1' />
            إضافة لجنة جديدة
          </button>
        </div>
        <div className='col-md-6 mb-4'>
          <label>اسم عضو الفريق</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='أحمد محمد عبد الله'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>صورة عضو الفريق</span>
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
        <div className='col-md-12'>
          <div className={`col-md-6 mb-4 ${styles.dropdwon}`}>
            <DropDownList
              options={[
                { value: 'manager', label: 'مدير حسابات' },
                { value: 'developer', label: 'مطوّر' },
                { value: 'designer', label: 'مصمّم' },
              ]}
              defaultValue='manager'
            />
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <label>اسم عضو الفريق</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='أحمد محمد عبد الله'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>صورة عضو الفريق</span>
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
        <div className='col-md-12'>
          <div className={`col-md-6 mb-4 ${styles.dropdwon}`}>
            <DropDownList
              options={[
                { value: 'manager', label: 'مدير حسابات' },
                { value: 'developer', label: 'مطوّر' },
                { value: 'designer', label: 'مصمّم' },
              ]}
              defaultValue='manager'
            />
          </div>
        </div>
        <div className='col-md-6 mb-4'>
          <label>اسم عضو الفريق</label>
          <input
            type='text'
            className='form-control rounded-pill'
            defaultValue='أحمد محمد عبد الله'
          />
        </div>
        <div className='col-md-6 mb-4'>
          <span>صورة عضو الفريق</span>
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
        <div className='col-md-12'>
          <div className={`col-md-6 mb-4 ${styles.dropdwon}`}>
            <DropDownList
              options={[
                { value: 'manager', label: 'مدير حسابات' },
                { value: 'developer', label: 'مطوّر' },
                { value: 'designer', label: 'مصمّم' },
              ]}
              defaultValue='manager'
            />
          </div>
        </div>
        <div className='col-md-6'>
          <Button title={'حفظ التغييرات'} color='btn-primary' />
        </div>
        <div className='col-md-6'>
          <Button title={'نشر على الموقع'} color='btn-outline-primary' />
        </div>
      </div>
    </div>
  );
};

export default AddNewCommittee;
