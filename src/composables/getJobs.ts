import { ref, Ref } from 'vue'
import { Job } from '../classes/job'
import SendRequest from './wrapper'

const getJobs = () => {
  const jobs: Ref<Array<Job>> = ref([])
  const url = 'http://127.0.0.1:5000/jobs'
  const { error, isLoading } = SendRequest(url, jobs)
  return { jobs, error, isLoading }
}

export default getJobs
