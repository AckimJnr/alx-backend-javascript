import sinon from 'sinon';
import Utils from './utils.js';
import sendPaymentRequestToApi from './3-payment.js';
import { expect } from 'chai';

describe('sendPaymentRequestToApi', () => {
    let spy;

    beforeEach(() => {
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(() => {
        spy.restore();
    });

    it('should call Utils.calculateNumber with SUM and correct arguments', () => {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
    });
});