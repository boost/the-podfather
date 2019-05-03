import axios from 'axios'
import { KUBERNETES_ENDPOINT } from '../constants'

class FetchNodeDetails {
  constructor (nodeName) {
    this.nodeName = nodeName;
  }

  async call () {
    const instance = axios.create({
      baseURL: KUBERNETES_ENDPOINT,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'GET',
        'Content-Type': 'application/json',
      },
    })

    const response = await instance.get(`/api/v1/nodes/${this.nodeName}`);

    console.log(response)

    const data = response.data;
    const availabilityZone = data.metadata.labels['failure-domain.beta.kubernetes.io/zone'];
    const labels = data.metadata.labels;
    const instanceType = data.metadata.labels['beta.kubernetes.io/instance-type'];

    return {
      name: this.nodeName,
      availabilityZone,
      labels,
      instanceType,
    }
  }
}

export default FetchNodeDetails;
