import { expect, it, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import PasswordResetView from './Index.vue'

describe('PasswordResetView', () => {
  it('should render', () => {
    const wrapper = shallowMount(PasswordResetView)
    expect(wrapper.find('.password-reset-view').exists()).toBe(true)
  })
})