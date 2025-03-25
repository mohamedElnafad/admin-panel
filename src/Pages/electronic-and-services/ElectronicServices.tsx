import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AddIcon from '@mui/icons-material/Add';
// import styles from './CommitteeAndTeams.module.scss';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/pagination/Pagination';
import { useState } from 'react';

const ElectronicServices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { name: 'تتبع المخالفات', category: 'الأفراد' },
    { name: 'إصدار التصاريح المركبة', category: 'الشركات' },
    { name: 'الاستعلام عن الرسوم المركبة', category: 'الشركات' },
    { name: 'تتبع المخالفات', category: 'الأفراد' },
    { name: 'إصدار التصاريح المركبة', category: 'الشركات' },
    { name: 'الاستعلام عن الرسوم المركبة', category: 'الشركات' },
  ];

  const filteredServices = services.filter((service) =>
    service.name.includes(searchTerm)
  );
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
      <div className={` p-3 rounded shadow-sm bg-white container`}>
        <div className='row mb-2'>
          <div className='col-md-4 text-center'></div>
          <div className='col-md-4 text-center'>
            <span>الفئة المستهدفة</span>
          </div>
          <div className='col-md-4'>
            <span>اسم الخدمة</span>
          </div>
        </div>
        {services.map((service, index) => (
          <div key={index} className='row border-bottom py-3'>
            <div className='col-md-4 '>
              <div className='d-flex gap-2'>
                <button
                  className='btn btn-primary d-flex align-items-center rounded-pill'
                  //   onClick={() =>
                  //     navigate(
                  //       `/comittee-and-teams/update-comittee-and-teams/${service.name}/${index}`
                  //     )
                  //   }
                >
                  تعديل
                  <EditIcon className='ms-1' />
                </button>
                <button className='btn btn-outline-primary d-flex align-items-center rounded-pill'>
                  عرض
                  <VisibilityIcon className='ms-1' />
                </button>
              </div>
            </div>

            <div className='col-md-4 text-center'>
              <span>{service.category}</span>
            </div>

            <div className='col-md-4'>
              <span>{service.name}</span>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      ;
    </div>
  );
};

export default ElectronicServices;
