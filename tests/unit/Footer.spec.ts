import Footer from '@/components/Footer.vue';
import { shallowMount } from '@vue/test-utils';

describe('Footer', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('shows a copyright tag', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.find('p').text()).toBe('© 2019 Justin Ho');
  });
});
