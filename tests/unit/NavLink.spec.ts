import NavLink from '@/components/NavLink.vue';
import { shallowMount } from '@vue/test-utils';

const navLinkProp = {
  icon: 'fas fa-external',
  link: '/',
  text: 'Testing'
};

describe('NavLink', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavLink, {
      propsData: {
        prop: navLinkProp
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
