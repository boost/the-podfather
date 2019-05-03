import FetchNodeDetails from '@/services/fetch-node-details.service.js';

describe('FetchNodeDetails', () => {
  it('is initialized with a node name', () => {
    const nodeName = 'Nodey McNodeNode';
    const service = new FetchNodeDetails(nodeName);

    expect(service).toHaveProperty('nodeName', nodeName);
  });

  describe('#call', () => {
    describe('attributes', () => {
      let nodeDetails, nodeName;

      beforeEach(async() => {
        nodeName = 'ip-172-20-122-240.ap-southeast-2.compute.internal';
        const service = new FetchNodeDetails(nodeName);
        nodeDetails = await service.call();
      });

      it('has the node name', () => {
        expect(nodeDetails).toHaveProperty('name');
        expect(typeof nodeDetails.name).toBe(String);
      });

      it('has the availability zone', () => {
        expect(nodeDetails).toHaveProperty('availabilityZone');
        expect(typeof nodeDetails.availabilityZone).toBe(String);
      });

      it('has labels', () => {
        expect(nodeDetails).toHaveProperty('labels')
        expect(typeof nodeDetails.labels).toBe(Object)
      });

      it('has the instance type', () => {
        expect(nodeDetails).toHaveProperty('instanceType');
        expect(typeof nodeDetails.instanceType).toBe(String);
      });
    });
  });
});