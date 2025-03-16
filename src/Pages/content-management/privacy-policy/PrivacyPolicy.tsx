import Button from '../../../components/Button/Button';
import styles from './PrivacyPolicy.module.scss';
const PrivacyPolicy = () => {
  return (
    <div className={`container ${styles.privacyPolicy}`}>
      <div className='row'>
        <div className='col-md-12 mb-4'>
          <label className={styles.label}>رؤيتنا</label>
          <textarea
            className={styles.textarea}
            placeholder='لحن تستخدم النص التدريبي هذا ليكون بمثابة نموذج للعرض فقط دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في التصاميم كبديل مؤقت للنصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع لكن تستخدم النص التجريبي هذا ليكون بمثابة. نموذج للعرض فقط دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في التصاميم كبديل مولد للنصوص الفعلية التي
سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع بدن تستخدم النص التجريبي هذا ليكون عتابة نموذج للتعيي فقط دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في التصاميم كبديل مؤقت للنصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع، نحن تستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في التصاميم كبديل مؤقت للنصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع من استخدم النص التجريبي هذا : ليكون بمثابة نموذج للعرض فقط، دون أن يكون لها أي معنى حقيقي علم استخدام هذا النوع من النصوص في التصاميم كيميل مؤقت النصوص الفعلية التي سيتم إضافتها لاحقا بعد اكتمال العمل على المشروع'
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

export default PrivacyPolicy;
