import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
import styles from './CommitteeAndTeams.module.scss';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { useState } from 'react';

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
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;
  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-end mb-3'>
        <button
          className='btn btn-primary d-flex align-items-center rounded-pill'
          onClick={() => navigate('/comittee-and-teams/add-committee')}
        >
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
              <button
                className='btn btn-primary d-flex align-items-center rounded-pill'
                onClick={() =>
                  navigate(
                    `/comittee-and-teams/update-comittee-and-teams/${name}/${index}`
                  )
                }
              >
                تعديل
                <EditIcon className='ms-1' />
              </button>
              <button className='btn btn-outline-primary d-flex align-items-center rounded-pill'>
                عرض
                <VisibilityIcon className='ms-1' />
              </button>
            </div>
            <div className='d-flex align-items-center gap-3'>
              <span>{name}</span>
              <img
                src='/path/to/icon.png'
                alt='Committee Icon'
                className={styles.committeeIcon}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default CommitteeAndTeams;
