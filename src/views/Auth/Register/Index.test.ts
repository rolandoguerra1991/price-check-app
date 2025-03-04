import { expect, it, describe } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import RegisterView from './Index.vue'

describe('RegisterView', () => {
  it('should render', () => {
    const wrapper = shallowMount(RegisterView)
    expect(wrapper.find('.register-view').exists()).toBe(true)
  })
})