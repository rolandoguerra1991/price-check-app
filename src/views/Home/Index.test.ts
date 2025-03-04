import { expect, it, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import HomeView from './Index.vue'

describe('HomeView', () => {
  it('should render', () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.find('.home-view').exists()).toBe(true)
  })
})