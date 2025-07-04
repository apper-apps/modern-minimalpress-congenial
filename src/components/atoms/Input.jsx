import { forwardRef } from 'react'
import ApperIcon from '@/components/ApperIcon'

const Input = forwardRef(({ 
  label,
  type = 'text',
  error,
  icon,
  placeholder,
  className = '',
  ...props 
}, ref) => {
  const inputClasses = `input-field ${error ? 'border-error focus:border-error focus:ring-error' : ''} ${icon ? 'pl-12' : ''} ${className}`

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-primary dark:text-dark-primary mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ApperIcon name={icon} className="w-5 h-5 text-secondary dark:text-dark-secondary" />
          </div>
        )}
        
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputClasses}
          {...props}
        />
      </div>
      
      {error && (
        <p className="mt-2 text-sm text-error flex items-center">
          <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input