import { ref, Ref } from 'vue'
import { Job } from '../classes/job'
import SendRequest from './wrapper'

const getJobInfo = (jobId: number) => {
  const job: Ref<Array<Job>> = ref([])

  const url = 'http://127.0.0.1:5000/job/' + jobId
  const { error, isLoading } = SendRequest(url, job)
  return { job, error, isLoading }
}

export default getJobInfo
