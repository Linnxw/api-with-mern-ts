
export interface UserType{
  userId: string
  name: string
  email: string
  password: string
  role?: string
}

export interface SessionType{
  email: string
  password: string
}