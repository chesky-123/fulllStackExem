import React from 'react'
import { Navigate } from 'react-router'

type ProtectedRoutesProps = {
    children: React.ReactNode,
    isAuthRequired?: boolean
}


export default function ProtectedRoutes({ children, isAuthRequired = true }: ProtectedRoutesProps) {
    const token = localStorage.getItem("auth-token");
    if (!token && isAuthRequired) return <Navigate to={'/login'} replace />
    if (token && !isAuthRequired) return <Navigate to={"/profile"} />
    return (
        <>{children}</>
    )
}
