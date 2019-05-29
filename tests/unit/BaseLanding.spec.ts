import BaseLanding from '@/components/BaseLanding.vue';
import { shallowMount } from '@vue/test-utils';

describe('Base Landing', () => {
    it ('is a Vue instance', () => {
        const wrapper = shallowMount(BaseLanding);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
