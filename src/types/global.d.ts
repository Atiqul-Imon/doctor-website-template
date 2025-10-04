// Global type declarations for better IDE support
declare module '@/components/auth/ProtectedRoute' {
  import { ReactNode } from 'react'
  
  interface ProtectedRouteProps {
    children: ReactNode
  }
  
  export function ProtectedRoute({ children }: ProtectedRouteProps): JSX.Element
}
