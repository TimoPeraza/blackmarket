export const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export const API = {
    signUp: '/dj-rest-auth/registration/',
    signIn: '/dj-rest-auth/login/'
  }

export const paths = {
  signUp: '/auth/sign-up',
  signIn: '/auth/sign-in',
  home: '/'
}
