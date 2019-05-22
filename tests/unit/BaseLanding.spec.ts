import BaseLanding from '@/components/BaseLanding.vue';
import { shallowMount } from '@vue/test-utils';
import { expect } from 'chai';

describe('Base Landing', () => {
    it ('renders tagline when passed', () => {
        const msg = 'hello, my name is justin';
        const wrapper = shallowMount(BaseLanding, {
            propsData: { tagline: msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});
