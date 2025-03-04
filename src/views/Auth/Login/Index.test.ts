import { expect, it, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import LoginView from './Index.vue'

describe('LoginView', () => {
  it('should render', () => {
    const wrapper = shallowMount(LoginView)
    expect(wrapper.find('.login-view').exists()).toBe(true)
  })
})