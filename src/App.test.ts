import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import App from './App.vue'

describe('App', () => {
  it('should render app-root', () => {
    const wrapper = shallowMount(App)
    const appRoot = wrapper.find('.app-root')
    expect(appRoot.exists()).toBe(true)
  })
})