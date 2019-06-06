import Button from '@/components/Button.vue';
import { shallowMount } from '@vue/test-utils';

const btnProp = {
    icon: 'fas fa-external',
    label: 'test-btn',
    link: '/',
    text: 'Testing'
};

const mountFactory = (propsData: object) => {
    return shallowMount(Button, {
        propsData: {
            prop: propsData
        }
    });
};

describe('Button Component', () => {
    it('is a Vue instance', () => {
        const wrapper = mountFactory(btnProp);
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('renders a link', () => {
        const wrapper = mountFactory(btnProp);
        expect(wrapper.contains('a')).toBe(true);
        expect(wrapper.attributes('href')).toBe(btnProp.link);
    });

    it('meets CORS rules for links', () => {
        const wrapper = mountFactory(btnProp);
        expect(wrapper.attributes('rel')).toBe('noopener noreferrer');
    });

    it('mounts with props text', () => {
        const wrapper = mountFactory(btnProp);
        expect(wrapper.text()).toBe(btnProp.text);
    });

    it('has an aria-label for accessibility', () => {
        const wrapper = mountFactory(btnProp);
        expect(wrapper.attributes('aria-label')).toBeDefined();
    });
});
