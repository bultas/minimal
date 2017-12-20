import assert from 'assert';
import sinon from 'sinon';

import * as module from './hello';
import { world } from './world';


describe('Test SayHello', function() {

    beforeEach(function() {
        this.sandbox = sinon.createSandbox();
    });

    afterEach(function() {
        this.sandbox.restore();
    });

    it('Test spy', function() {
        const spy = this.sandbox.spy(module, 'sayHello')
        world();
        assert(spy.calledOnce)
    });

    it('Test stub', function() {
        const stub = this.sandbox.stub(module, 'sayHello');
        world();
        assert(stub.calledOnce)
    });

    it('Test mock', function() {
        const mock = this.sandbox.mock(module)
        mock.expects("sayHello").once().withArgs('world')
        world();
        mock.verify();
        this.sandbox.restore();
    });


});
