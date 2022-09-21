import { ref, Ref } from 'vue'

const SendRequest = (url: string, result: any) => {
  const error: Ref<Error | null> = ref(null)
  const isLoading: Ref<boolean> = ref(true)

  fetch(url)
    .then((data) => {
      if (!data.ok) throw new Error(`${data.status} - ${data.statusText}`)

      return data.json()
    })
    .then((data2) => {
      result.value = data2
    })
    .catch((ex) => {
      console.error(ex)
      error.value = ex
    })
    .finally(() => {
      isLoading.value = false
    })
  return { error, isLoading }
}

export default SendRequest
