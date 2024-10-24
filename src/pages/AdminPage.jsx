import React,{useEffect,useState}from 'react'
import './css/AdminPage.css'
import AdminSideBar from '../components/SideBarAdmin/SideBarAdmin'
import AddJobForm from '../components/AddJobForm/AddJobForm'
import { Routes, Route } from 'react-router-dom'
import ViewJobsTable from '../components/ViewJobsTable/ViewJobsTable'
import Loading from '../components/Loading/Loading'

const AdminPage = ({company_name,base64Credentials}) => {

    const [jobs, setJobs] = useState([]); 
    const [loading, setLoading] = useState(true);

    const fetchJobs = async (company) => {
      setLoading(true); 
      try {

        const url = `http://localhost:8080/api/getJobsByCompany?company=${encodeURIComponent(company_name)}`;

        // Add authorization header using base64Credentials
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${base64Credentials}`,  // Include Authorization header
                'Content-Type': 'application/json'  // Optional, in case you need to specify content-type
            },
        });
        
    
        if (!response.ok) {
          throw new Error('Failed to fetch jobs');
        }
    
        const data = await response.json();
    
        if (Array.isArray(data)) {
          setJobs(data); 
          console.log('Jobs fetched:', data);
        } else {
          console.error('Unexpected data format:', data);
        }
    
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false); 
      }
    };
         
    useEffect(() => {

      fetchJobs("Software Solutions");// hard coded company name for now
      }, []);
    
      if (loading) {
        return <Loading />;
      }
    
    return (
        <div className='admin-container'>
            <AdminSideBar />
            <Routes>
                <Route path='add-job' element={<AddJobForm fetch_jobs={fetchJobs} base64Credentials={base64Credentials}/>} />
                <Route path='' element={<ViewJobsTable  Job_list={jobs} fetch_jobs={fetchJobs} base64Credentials={base64Credentials} />} />
            </Routes>
        </div>
    )
}

export default AdminPage