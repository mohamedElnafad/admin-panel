import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import styles from './CommitteeAndTeams.module.scss';

const committees = [
  'لجنة التحديث والتطوير الحركي',
  'لجنة تسهيل التجارة والخدمات الحركية',
  'لجنة مراقبة الاحتلال الحركي',
  'لجنة التحديث والتطوير الحركي',
  'لجنة تسهيل التجارة والخدمات الحركية',
  'لجنة مراقبة الاحتلال الحركي',
  'لجنة التحديث والتطوير الحركي',
];

const CommitteeAndTeams = () => {
  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-end mb-3'>
        <button className='btn btn-primary d-flex align-items-center rounded-pill'>
          إضافة لجنة جديدة
          <AddIcon className='ms-1' />
        </button>
      </div>

      <div className={`${styles.committeeList} p-3 rounded shadow-sm bg-white`}>
        {committees.map((name, index) => (
          <div
            key={index}
            className='d-flex justify-content-between align-items-center border-bottom py-3'
          >
            <div className='d-flex gap-2'>
              <button className='btn btn-primary d-flex align-items-center rounded-pill'>
                تعديل
                <EditIcon className='ms-1' />
              </button>
              <button className='btn btn-outline-primary d-flex align-items-center rounded-pill'>
                عرض
                <VisibilityIcon className='ms-1' />
              </button>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <span className='fw-bold'>{name}</span>
              <img
                src='/path/to/icon.png'
                alt='Committee Icon'
                className={styles.committeeIcon}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='d-flex justify-content-center mt-4'>
        <nav>
          <ul className='pagination'>
            <li className='page-item'>
              <button className='page-link'>«</button>
            </li>
            {[1, 2, 3, 4, 5, 6, 7, 8, 20].map((num) => (
              <li key={num} className='page-item'>
                <button className='page-link'>{num}</button>
              </li>
            ))}
            <li className='page-item'>
              <button className='page-link'>»</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CommitteeAndTeams;
