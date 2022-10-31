/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
import { jsx } from '@emotion/react'
import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import { useState, useEffect } from 'react'

const styles = {
  MozAppearance: 'textfield',
  '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0
  }
}

export function parseText(text) {
  if (isNumber(text)) return text

  if (isString(text)) {
    text = text.trim()

    if (!text) return ''
    const num = parseFloat(text)

    if (!isNaN(num)) {
      return num
    }
  }

  return ''
}

export function changeValue(mod, value, max, min, step) {
  if (value === '') {
    if (isNumber(min)) return min
    return ''
  }

  value = mod === '+' ? value + step : value - step

  if (isNumber(max) && value > max) return max
  if (isNumber(min) && value < min) return min

  const p = (step.toString().split('.')[1] || []).length
  if (p) {
    return parseFloat(value.toFixed(p))
  }

  return value
}

const KEY_UP = 38
const KEY_DOWN = 40
const IS_IOS = typeof navigator !== 'undefined' ? navigator.userAgent.match(/iPhone|iPad|iPod/i) : false

const BpInputNumber = ({
  step,
  min,
  max,
  value,
  onChange,
  onKeyDown,
  enableMobileNumericKeyboard,
  component,
  ...props
}) => {
  const [text, setText] = useState(value)

  useEffect(() => {
    setText(value)
  }, [value])

  function handleChange(text) {
    const value = parseText(text)

    setText(text)
    if (onChange) {
      onChange(value)
    }
  }

  function handleWheel(e) {
    e.target.blur()
  }

  function handleKeyDown(e) {
    if (e.keyCode === KEY_UP) {
      up()
    } else if (e.keyCode === KEY_DOWN) {
      down()
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  function up() {
    if (onChange) {
      onChange(changeValue('+', value, max, min, step))
    }
  }

  function down() {
    if (onChange) {
      onChange(changeValue('-', value, max, min, step))
    }
  }

  const inputProps = {
    value: text,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onWheel: handleWheel
  }

  if (enableMobileNumericKeyboard) {
    return jsx(component, {
      ...props,
      ...inputProps,
      css: styles,
      type: 'number',
      inputMode: 'numeric',
      pattern: IS_IOS ? `[0-9]*` : '',
      step,
      min,
      max
    })
  }

  return jsx(component, {
    ...props,
    ...inputProps,
    css: styles,
    type: 'text'
  })
}

const Input = ({ onChange, ...props }) => {
  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value)
    }
  }
  return <input {...props} type="number" onChange={handleChange} />
}

BpInputNumber.defaultProps = {
  autoComplete: 'off',
  enableMobileNumericKeyboard: false,
  value: '',
  component: Input,
  step: 1
}

export default BpInputNumber
