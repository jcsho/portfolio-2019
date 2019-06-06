import NavBar from '@/components/NavBar.vue';
import { RouterLinkStub, shallowMount } from '@vue/test-utils';

describe('Navbar', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(NavBar, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('shows my name as a logo', () => {
    const wrapper = shallowMount(NavBar, {
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
    expect(wrapper.find('h1').text()).toBe('Justin Ho');
  });
});
