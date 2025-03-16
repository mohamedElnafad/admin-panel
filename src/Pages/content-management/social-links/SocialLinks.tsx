import Button from '../../../components/Button/Button';
import styles from 'SocialLinks.module.scss';

const SocialLinks = () => {
  return (
    <div className={`container`}>
      <div className='row'>
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
  );
};

export default SocialLinks;
