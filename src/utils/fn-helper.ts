import {redirect} from 'react-router-dom'

export const formatName = (firstName: string, name?: string) => {
  if (name) {
    return `${name} (${firstName})`
  }
  return firstName
}

export const customLoader = async () => {
  //validation for gh-pages deployment
  const pathname = window.location.pathname
  if (pathname === '/microf-container-app/') return redirect('/')
  return null
}
