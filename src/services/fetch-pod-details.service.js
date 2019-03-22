class FetchPodDetails {
  constructor (podName) {
    this.podName = podName
  }

  podMemoryLimit () {
    return '1 Gb'
  }
}

export default FetchPodDetails
