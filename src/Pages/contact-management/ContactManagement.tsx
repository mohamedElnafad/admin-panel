import React from 'react';
import styles from './ContactManagement.module.scss';
import Button from '../../components/button/Button';
import '../../App.module.scss';

const ContactManagement: React.FC = () => {
  return (
    <div className={styles.contactManagement}>
      <div className='container'>
        <div className='row mb-4'>
          {/* Phone Number */}
          <div className='col-md-6 mb-4'>
            <label>رقم الهاتف</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='+966 4561 1234'
            />
          </div>

          {/* SMS Number */}
          <div className='col-md-6 mb-3'>
            <label>رقم الرسائل القصيرة</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='+966 4561 1234'
            />
          </div>

          {/* Fax Number */}
          <div className='col-md-6 mb-4'>
            <label>رقم الفاكس</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='+966 4561 1234'
            />
          </div>

          {/* Email */}
          <div className='col-md-6 mb-4'>
            <label>البريد الإلكتروني</label>
            <input
              type='email'
              className='form-control rounded-pill'
              defaultValue='info@gcc.net'
            />
          </div>

          {/* Geographic Location */}
          <div className='col-md-6 mb-4'>
            <label>الموقع الجغرافي</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='الرياض، شارع الملك فهد، مبنى رقم 123'
            />
          </div>

          {/* Postal Address */}
          <div className='col-md-6 mb-4'>
            <label>العنوان البريدي</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='ص.ب 456 الرياض، المملكة العربية السعودية 11564'
            />
          </div>

          {/* Social Media Links */}

          <div className='col-md-6 mb-4'>
            <label>رابط منصة فيسبوك</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='https://www.facebook.com/gcc'
            />
          </div>

          <div className='col-md-6 mb-4'>
            <label>رابط منصة إكس</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='https://twitter.com/gccg'
            />
          </div>

          <div className='col-md-6 mb-4'>
            <label>رابط منصة لينكدإن</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='https://www.linkedin.com/gcc'
            />
          </div>

          <div className='col-md-6 mb-4'>
            <label>رابط منصة يوتيوب</label>
            <input
              type='text'
              className='form-control rounded-pill'
              defaultValue='https://www.youtube.com/gcc'
            />
          </div>

          {/* Buttons */}
          <div className='row '>
            <div className='col-md-6'>
              <Button title={'حفظ التغييرات'} color='btn-primary' />
            </div>
            <div className='col-md-6'>
              <Button title={'نشر على الموقع'} color='btn-outline-primary' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactManagement;
