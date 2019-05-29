import Button from '@/components/Button.vue';
import { shallowMount } from '@vue/test-utils';

describe('Button', () => {
    it('is a Vue instance', () => {
        const btnProp = {
            icon: 'fas fa-external-alt',
            link: '/',
            text: 'Link'
        };
        const wrapper = shallowMount(Button, {
            propsData: {prop: btnProp }
        });
        expect(wrapper.isVueInstance()).toBeTruthy();
    });
});
