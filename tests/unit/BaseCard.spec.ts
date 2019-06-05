import BaseCard from '@/components/BaseCard.vue';
import { shallowMount } from '@vue/test-utils';

const baseCardProp = {
  icon: 'fas fa-external',
  link: '/',
  title: 'Testing'
};

describe('BaseCard', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(BaseCard, {
      propsData: {
        ...baseCardProp
      }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
