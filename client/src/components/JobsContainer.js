import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';

const JobsContainer = () => {
  const{getJobs, jobs, isLoading, page,totalJobs} = useAppContext
  
  useEffect (() =>{
    getJobs()    
  },[])
  
  return ( <div>
    <Loading />
  </div>
  

  );
}

export default JobsContainer;
