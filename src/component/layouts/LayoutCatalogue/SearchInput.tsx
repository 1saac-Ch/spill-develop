import * as React from 'react'

import { cn } from '@/utils/classname'
import SearchIcon from '@mui/icons-material/Search'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex items-center bg-[#E8FBF5] rounded-lg">
        <input
          type={type}
          className={cn(
            'flex h-14 md:min-w-[600px] bg-transparent p-3 text-base ring-offset-background placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 font-satoshi pr-10',
            className
          )}
          ref={ref}
          {...props}
        />

        <SearchIcon className="mr-5 text-muted-foreground" />
      </div>
    )
  }
)
SearchInput.displayName = 'Input'

export { SearchInput }
