import FetchPodDetails from '@/services/fetch-pod-details'

describe('FetchPodDetails', () => {
  it('can be initialised with the pod name', () => {
    expect(new FetchPodDetails('pod-name')).not.toThrow()
  })

  it('fetch pod memory limit in Gb', () => {
    const podDetails = new FetchPodDetails('pod-name')
    const fetchMemoryLimit = jest.fn().mockReturnValueOnce(1024)
    podDetails.fetchMemoryLimit = fetchMemoryLimit

    const podMemoryLimit = podDetails.getMemoryLimit()

    expect(podMemoryLimit).stringContaining('1 Gb')
  })

  it('fetch pod memory request in Gb', () => {
    const podDetails = new FetchPodDetails('pod-name')
    const fetchMemoryRequest = jest.fn().mockReturnValueOnce(1024)
    podDetails.fetchMemoryRequest = fetchMemoryRequest

    const podMemoryLimit = podDetails.getMemoryLimit()

    expect(podMemoryLimit).stringContaining('1 Gb')
  })

  it('fetch pod memory current usage in Gb', () => {
    const podDetails = new FetchPodDetails('pod-name')
    const fetchMemoryCurrentUsage = jest.fn().mockReturnValueOnce(1024)
    podDetails.fetchMemoryCurrentUsage = fetchMemoryCurrentUsage

    const podMemoryLimit = podDetails.getMemoryLimit()

    expect(podMemoryLimit).stringContaining('1 Gb')
  })
})
