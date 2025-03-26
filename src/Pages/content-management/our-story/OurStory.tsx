import React from 'react';
import styles from './OurStory.module.scss';
import Button from '../../../components/button/Button';
import DropDownList from '../../../components/dropdwon-list/DropDownList';
import { useGetAllStoriesQuery } from '../../../services/ourStorySlice';
const OurStory: React.FC = () => {
  const { data, error, isLoading } = useGetAllStoriesQuery();
  console.log(data);
  const yearOptions = data
    ? Array.from(new Set(data.map((story) => story.yearTag))).map((year) => ({
        label: year,
        value: year,
      }))
    : [];
  return (
    <div className={styles.ourStory}>
      <label className={styles.label}>نص القصة</label>
      <textarea
        className={styles.textarea}
        placeholder='نحن مستخدم النص التجريبي هذا ليكون بمثابة نموذج للعرض فقط، دون أن يكون له أي معنى حقيقي يتم استخدام هذا النوع من النصوص في'
      />

      <div className='row mb-4 mt-4'>
        <div className='col-md-12'>
          <div className={`col-md-6 mb-4`}>
            <label className={styles.label}>السنة</label>
            <DropDownList options={yearOptions} defaultValue='manager' />
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
