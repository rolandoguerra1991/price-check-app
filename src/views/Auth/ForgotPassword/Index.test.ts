import { expect, it, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import ForgotPasswordView from './Index.vue'

describe('ForgotPasswordView', () => {
  it('should render', () => {
    const wrapper = shallowMount(ForgotPasswordView)
    expect(wrapper.find('.forgot-password-view').exists()).toBe(true)
  })
})